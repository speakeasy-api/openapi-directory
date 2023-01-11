package openapisdk.models.operations;



public class GetComposeEnvironmentsResponse {
    public byte[] body;
    public GetComposeEnvironmentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetComposeEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetComposeEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}