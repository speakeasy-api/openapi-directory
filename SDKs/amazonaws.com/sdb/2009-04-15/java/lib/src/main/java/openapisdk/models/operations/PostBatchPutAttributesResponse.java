package openapisdk.models.operations;



public class PostBatchPutAttributesResponse {
    public byte[] body;
    public PostBatchPutAttributesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostBatchPutAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBatchPutAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}