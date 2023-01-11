package openapisdk.models.operations;



public class GetTestFailoverResponse {
    public byte[] body;
    public GetTestFailoverResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTestFailoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTestFailoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}