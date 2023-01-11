package openapisdk.models.operations;



public class PostGetSerialConsoleAccessStatusResponse {
    public byte[] body;
    public PostGetSerialConsoleAccessStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetSerialConsoleAccessStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetSerialConsoleAccessStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}