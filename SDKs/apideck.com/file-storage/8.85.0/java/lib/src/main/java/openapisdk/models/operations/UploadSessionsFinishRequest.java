package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadSessionsFinishRequest {
    public String serverURL;
    public UploadSessionsFinishRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UploadSessionsFinishPathParams pathParams;
    public UploadSessionsFinishRequest withPathParams(UploadSessionsFinishPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UploadSessionsFinishQueryParams queryParams;
    public UploadSessionsFinishRequest withQueryParams(UploadSessionsFinishQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UploadSessionsFinishHeaders headers;
    public UploadSessionsFinishRequest withHeaders(UploadSessionsFinishHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UploadSessionsFinishRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public UploadSessionsFinishSecurity security;
    public UploadSessionsFinishRequest withSecurity(UploadSessionsFinishSecurity security) {
        this.security = security;
        return this;
    }
}