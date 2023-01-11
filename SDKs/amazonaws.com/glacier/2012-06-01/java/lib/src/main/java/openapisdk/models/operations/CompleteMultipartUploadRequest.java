package openapisdk.models.operations;



public class CompleteMultipartUploadRequest {
    public CompleteMultipartUploadPathParams pathParams;
    public CompleteMultipartUploadRequest withPathParams(CompleteMultipartUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompleteMultipartUploadHeaders headers;
    public CompleteMultipartUploadRequest withHeaders(CompleteMultipartUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
}