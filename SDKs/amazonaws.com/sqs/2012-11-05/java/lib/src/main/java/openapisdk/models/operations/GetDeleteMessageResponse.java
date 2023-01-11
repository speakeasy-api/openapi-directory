package openapisdk.models.operations;



public class GetDeleteMessageResponse {
    public byte[] body;
    public GetDeleteMessageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}