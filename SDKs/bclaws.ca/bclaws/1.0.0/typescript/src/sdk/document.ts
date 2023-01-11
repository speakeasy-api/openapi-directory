import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Document {
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
   * getDocumentIdAspectIdCivixIndexIdCivixDocumentId - Retrieves a specific document from the BCLaws legislative repository (HTML format)
   *
   * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
  **/
  getDocumentIdAspectIdCivixIndexIdCivixDocumentId(
    req: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
   *
   * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
  **/
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString(
    req: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/search/{searchString}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml - Retrieves a specific document from the BCLaws legislative repository (XML format)
   *
   * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
  **/
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml(
    req: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)
   *
   * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
  **/
  getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString(
    req: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml/search/{searchString}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
