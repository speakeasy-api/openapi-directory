package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadSessionsUploadRequest {
    public String serverURL;
    public UploadSessionsUploadRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UploadSessionsUploadPathParams pathParams;
    public UploadSessionsUploadRequest withPathParams(UploadSessionsUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UploadSessionsUploadQueryParams queryParams;
    public UploadSessionsUploadRequest withQueryParams(UploadSessionsUploadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UploadSessionsUploadHeaders headers;
    public UploadSessionsUploadRequest withHeaders(UploadSessionsUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] request;
    public UploadSessionsUploadRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public UploadSessionsUploadSecurity security;
    public UploadSessionsUploadRequest withSecurity(UploadSessionsUploadSecurity security) {
        this.security = security;
        return this;
    }
}