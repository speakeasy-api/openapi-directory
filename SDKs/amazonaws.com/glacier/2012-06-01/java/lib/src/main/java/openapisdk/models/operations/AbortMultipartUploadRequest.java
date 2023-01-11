package openapisdk.models.operations;



public class AbortMultipartUploadRequest {
    public AbortMultipartUploadPathParams pathParams;
    public AbortMultipartUploadRequest withPathParams(AbortMultipartUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AbortMultipartUploadHeaders headers;
    public AbortMultipartUploadRequest withHeaders(AbortMultipartUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
}