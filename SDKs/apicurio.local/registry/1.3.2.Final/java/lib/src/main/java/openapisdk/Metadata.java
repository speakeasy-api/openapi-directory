package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Metadata {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Metadata(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteArtifactVersionMetaData - Delete artifact version metadata
     *
     * Deletes the user-editable metadata properties of the artifact version.  Any properties
     * that are not user-editable are preserved.
     * 
     * This operation can fail for the following reasons:
     * 
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No version with this `version` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     * 
    **/
    public openapisdk.models.operations.DeleteArtifactVersionMetaDataResponse deleteArtifactVersionMetaData(openapisdk.models.operations.DeleteArtifactVersionMetaDataRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/artifacts/{artifactId}/versions/{version}/meta", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteArtifactVersionMetaDataResponse res = new openapisdk.models.operations.DeleteArtifactVersionMetaDataResponse() {{
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getArtifactMetaData - Get artifact metadata
     *
     * Gets the metadata for an artifact in the registry.  The returned metadata includes
     * both generated (read-only) and editable metadata (such as name and description).
     * 
     * This operation can fail for the following reasons:
     * 
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    public openapisdk.models.operations.GetArtifactMetaDataResponse getArtifactMetaData(openapisdk.models.operations.GetArtifactMetaDataRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/artifacts/{artifactId}/meta", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetArtifactMetaDataResponse res = new openapisdk.models.operations.GetArtifactMetaDataResponse() {{
            artifactMetaData = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ArtifactMetaData out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ArtifactMetaData.class);
                res.artifactMetaData = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getArtifactMetaDataByContent - Get artifact metadata by content
     *
     * Gets the metadata for an artifact that matches the raw content.  Searches the registry
     * for a version of the given artifact matching the content provided in the body of the
     * POST.
     * 
     * This operation can fail for the following reasons:
     * 
     * * Provided content (request body) was empty (HTTP error `400`)
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * No artifact version matching the provided content exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     * 
    **/
    public openapisdk.models.operations.GetArtifactMetaDataByContentResponse getArtifactMetaDataByContent(openapisdk.models.operations.GetArtifactMetaDataByContentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/artifacts/{artifactId}/meta", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetArtifactMetaDataByContentResponse res = new openapisdk.models.operations.GetArtifactMetaDataByContentResponse() {{
            artifactMetaData = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ArtifactMetaData out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ArtifactMetaData.class);
                res.artifactMetaData = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getArtifactMetaDataByGlobalId - Get global artifact metadata
     *
     * Gets the metadata for an artifact version in the registry using its globally unique
     * identifier.  The returned metadata includes both generated (read-only) and editable
     * metadata (such as name and description).
     * 
     * This operation may fail for one of the following reasons:
     * 
     * * No artifact version with this `globalId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     * 
    **/
    public openapisdk.models.operations.GetArtifactMetaDataByGlobalIdResponse getArtifactMetaDataByGlobalId(openapisdk.models.operations.GetArtifactMetaDataByGlobalIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ids/{globalId}/meta", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetArtifactMetaDataByGlobalIdResponse res = new openapisdk.models.operations.GetArtifactMetaDataByGlobalIdResponse() {{
            artifactMetaData = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ArtifactMetaData out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ArtifactMetaData.class);
                res.artifactMetaData = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getArtifactVersionMetaData - Get artifact version metadata
     *
     * Retrieves the metadata for a single version of the artifact.  The version metadata is 
     * a subset of the artifact metadata and only includes the metadata that is specific to
     * the version (for example, this doesn't include `modifiedOn`).
     * 
     * This operation can fail for the following reasons:
     * 
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No version with this `version` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     * 
    **/
    public openapisdk.models.operations.GetArtifactVersionMetaDataResponse getArtifactVersionMetaData(openapisdk.models.operations.GetArtifactVersionMetaDataRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/artifacts/{artifactId}/versions/{version}/meta", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetArtifactVersionMetaDataResponse res = new openapisdk.models.operations.GetArtifactVersionMetaDataResponse() {{
            versionMetaData = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VersionMetaData out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VersionMetaData.class);
                res.versionMetaData = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateArtifactMetaData - Update artifact metadata
     *
     * Updates the editable parts of the artifact's metadata.  Not all metadata fields can
     * be updated.  For example, `createdOn` and `createdBy` are both read-only properties.
     * 
     * This operation can fail for the following reasons:
     * 
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    public openapisdk.models.operations.UpdateArtifactMetaDataResponse updateArtifactMetaData(openapisdk.models.operations.UpdateArtifactMetaDataRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/artifacts/{artifactId}/meta", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateArtifactMetaDataResponse res = new openapisdk.models.operations.UpdateArtifactMetaDataResponse() {{
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateArtifactVersionMetaData - Update artifact version metadata
     *
     * Updates the user-editable portion of the artifact version's metadata.  Only some of 
     * the metadata fields are editable by the user.  For example, `description` is editable, 
     * but `createdOn` is not.
     * 
     * This operation can fail for the following reasons:
     * 
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No version with this `version` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     * 
    **/
    public openapisdk.models.operations.UpdateArtifactVersionMetaDataResponse updateArtifactVersionMetaData(openapisdk.models.operations.UpdateArtifactVersionMetaDataRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/artifacts/{artifactId}/versions/{version}/meta", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateArtifactVersionMetaDataResponse res = new openapisdk.models.operations.UpdateArtifactVersionMetaDataResponse() {{
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
}