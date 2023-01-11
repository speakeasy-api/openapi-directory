package openapisdk.models.operations;



public class PostDeleteWarmPoolResponse {
    public byte[] body;
    public PostDeleteWarmPoolResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteWarmPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteWarmPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}