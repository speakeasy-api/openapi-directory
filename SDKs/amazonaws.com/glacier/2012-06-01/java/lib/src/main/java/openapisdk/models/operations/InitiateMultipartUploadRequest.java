package openapisdk.models.operations;



public class InitiateMultipartUploadRequest {
    public InitiateMultipartUploadPathParams pathParams;
    public InitiateMultipartUploadRequest withPathParams(InitiateMultipartUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InitiateMultipartUploadHeaders headers;
    public InitiateMultipartUploadRequest withHeaders(InitiateMultipartUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
}