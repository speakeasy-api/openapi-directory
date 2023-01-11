import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Artifacts {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * createArtifact - Create artifact
   *
   * Creates a new artifact by posting the artifact content.  The body of the request should
   * be the raw content of the artifact.  This is typically in JSON format for *most* of the 
   * supported types, but may be in another format for a few (for example, `PROTOBUF`).
   * 
   * The registry attempts to figure out what kind of artifact is being added from the
   * following supported list:
   * 
   * * Avro (`AVRO`)
   * * Protobuf (`PROTOBUF`)
   * * Protobuf File Descriptor (`PROTOBUF_FD`)
   * * JSON Schema (`JSON`)
   * * Kafka Connect (`KCONNECT`)
   * * OpenAPI (`OPENAPI`)
   * * AsyncAPI (`ASYNCAPI`)
   * * GraphQL (`GRAPHQL`)
   * * Web Services Description Language (`WSDL`)
   * * XML Schema (`XSD`)
   * 
   * Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
   * HTTP request header, or include a hint in the request's `Content-Type`.  For example:
   * 
   * ```
   * Content-Type: application/json; artifactType=AVRO
   * ```
   * 
   * An artifact is created using the content provided in the body of the request.  This
   * content is created under a unique artifact ID that can be provided in the request
   * using the `X-Registry-ArtifactId` request header.  If not provided in the request,
   * the server generates a unique ID for the artifact.  It is typically recommended
   * that callers provide the ID, because this is typically a meaningful identifier, 
   * and for most use cases should be supplied by the caller.
   * 
   * If an artifact with the provided artifact ID already exists, the default behavior
   * is for the server to reject the content with a 409 error.  However, the caller can
   * supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
   * query parameter can have one of the following values:
   * 
   * * `FAIL` (*default*) - server rejects the content with a 409 error
   * * `UPDATE` - server updates the existing artifact and returns the new metadata
   * * `RETURN` - server does not create or add content to the server, but instead 
   * returns the metadata for the existing artifact
   * * `RETURN_OR_UPDATE` - server returns an existing **version** that matches the 
   * provided content if such a version exists, otherwise a new version is created
   * 
   * This operation may fail for one of the following reasons:
   * 
   * * An invalid `ArtifactType` was indicated (HTTP error `400`)
   * * No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
   * * Provided content (request body) was empty (HTTP error `400`)
   * * An artifact with the provided ID already exists (HTTP error `409`)
   * * The content violates one of the configured global rules (HTTP error `409`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  createArtifact(
    req: operations.CreateArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateArtifactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/artifacts";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.artifactMetaData = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteArtifact - Delete artifact
   *
   * Deletes an artifact completely, resulting in all versions of the artifact also being
   * deleted.  This may fail for one of the following reasons:
   * 
   * * No artifact with the `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
  **/
  deleteArtifact(
    req: operations.DeleteArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteArtifactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/artifacts/{artifactId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getArtifactByGlobalId - Get artifact by global ID
   *
   * Gets the content for an artifact version in the registry using its globally unique
   * identifier.
   * 
   * This operation may fail for one of the following reasons:
   * 
   * * No artifact version with this `globalId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  getArtifactByGlobalId(
    req: operations.GetArtifactByGlobalIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactByGlobalIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactByGlobalIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ids/{globalId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetArtifactByGlobalIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getLatestArtifact - Get latest artifact
   *
   * Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
   * response depends on the artifact type.  In most cases, this is `application/json`, but 
   * for some types it may be different (for example, `PROTOBUF`).
   * 
   * This operation may fail for one of the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  getLatestArtifact(
    req: operations.GetLatestArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLatestArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLatestArtifactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/artifacts/{artifactId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLatestArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listArtifacts - List all artifact IDs
   *
   * Returns a list of IDs of all artifacts in the registry as a flat list.  Typically the
   * server is configured to limit the number of artifact IDs returned when a large number 
   * of artifacts exist. In this case, the result of this call may be non-deterministic. The 
   * default limit is typically 1000 artifacts.
  **/
  listArtifacts(
    config?: AxiosRequestConfig
  ): Promise<operations.ListArtifactsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/artifacts";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListArtifactsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listArtifacts200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * searchArtifacts - Search for artifacts
   *
   * Returns a paginated list of all artifacts that match the provided search criteria.
   * 
  **/
  searchArtifacts(
    req: operations.SearchArtifactsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchArtifactsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchArtifactsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/artifacts";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchArtifactsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.artifactSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateArtifact - Update artifact
   *
   * Updates an artifact by uploading new content.  The body of the request should
   * be the raw content of the artifact.  This is typically in JSON format for *most*
   * of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
   * 
   * The registry attempts to figure out what kind of artifact is being added from the
   * following supported list:
   * 
   * * Avro (`AVRO`)
   * * Protobuf (`PROTOBUF`)
   * * Protobuf File Descriptor (`PROTOBUF_FD`)
   * * JSON Schema (`JSON`)
   * * Kafka Connect (`KCONNECT`)
   * * OpenAPI (`OPENAPI`)
   * * AsyncAPI (`ASYNCAPI`)
   * * GraphQL (`GRAPHQL`)
   * * Web Services Description Language (`WSDL`)
   * * XML Schema (`XSD`)
   * 
   * Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
   * HTTP request header, or include a hint in the request's `Content-Type`.  For example:
   * 
   * ```
   * Content-Type: application/json; artifactType=AVRO
   * ```
   * 
   * The update could fail for a number of reasons including:
   * 
   * * Provided content (request body) was empty (HTTP error `400`)
   * * No artifact with the `artifactId` exists (HTTP error `404`)
   * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
   * * The provided artifact type is not recognized (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
   * When successful, this creates a new version of the artifact, making it the most recent
   * (and therefore official) version of the artifact.
  **/
  updateArtifact(
    req: operations.UpdateArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/artifacts/{artifactId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.artifactMetaData = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateArtifactState - Update artifact state
   *
   * Updates the state of the artifact.  For example, you can use this to mark the latest
   * version of an artifact as `DEPRECATED`.  The operation changes the state of the latest 
   * version of the artifact.  If multiple versions exist, only the most recent is changed.
   * 
   * The following state changes are supported:
   * 
   * * Enabled -> Disabled
   * * Enabled -> Deprecated
   * * Enabled -> Deleted
   * * Disabled -> Enabled
   * * Disabled -> Deleted
   * * Disabled -> Deprecated
   * * Deprecated -> Deleted
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * Artifact cannot transition to the given state (HTTP error `400`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  updateArtifactState(
    req: operations.UpdateArtifactStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/artifacts/{artifactId}/state", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateArtifactStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
