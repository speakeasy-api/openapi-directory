package openapisdk.models.operations;



public class ChunkedUploadRequest {
    public ChunkedUploadPathParams pathParams;
    public ChunkedUploadRequest withPathParams(ChunkedUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ChunkedUploadHeaders headers;
    public ChunkedUploadRequest withHeaders(ChunkedUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ChunkedUploadSecurity security;
    public ChunkedUploadRequest withSecurity(ChunkedUploadSecurity security) {
        this.security = security;
        return this;
    }
}