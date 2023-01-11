package openapisdk.models.operations;



public class PostPutWarmPoolResponse {
    public byte[] body;
    public PostPutWarmPoolResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPutWarmPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPutWarmPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}