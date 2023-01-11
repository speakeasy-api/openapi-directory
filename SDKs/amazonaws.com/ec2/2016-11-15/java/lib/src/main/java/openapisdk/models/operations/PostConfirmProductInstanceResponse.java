package openapisdk.models.operations;



public class PostConfirmProductInstanceResponse {
    public byte[] body;
    public PostConfirmProductInstanceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostConfirmProductInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostConfirmProductInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}