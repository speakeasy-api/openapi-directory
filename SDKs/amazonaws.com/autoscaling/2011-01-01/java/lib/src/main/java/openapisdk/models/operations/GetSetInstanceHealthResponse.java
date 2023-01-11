package openapisdk.models.operations;



public class GetSetInstanceHealthResponse {
    public byte[] body;
    public GetSetInstanceHealthResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSetInstanceHealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetInstanceHealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}