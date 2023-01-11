package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadSessionsAddRequest {
    public String serverURL;
    public UploadSessionsAddRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UploadSessionsAddQueryParams queryParams;
    public UploadSessionsAddRequest withQueryParams(UploadSessionsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UploadSessionsAddHeaders headers;
    public UploadSessionsAddRequest withHeaders(UploadSessionsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUploadSessionRequest request;
    public UploadSessionsAddRequest withRequest(openapisdk.models.shared.CreateUploadSessionRequest request) {
        this.request = request;
        return this;
    }
    public UploadSessionsAddSecurity security;
    public UploadSessionsAddRequest withSecurity(UploadSessionsAddSecurity security) {
        this.security = security;
        return this;
    }
}