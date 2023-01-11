package openapisdk.models.operations;



public class PostEnableSerialConsoleAccessResponse {
    public byte[] body;
    public PostEnableSerialConsoleAccessResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostEnableSerialConsoleAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostEnableSerialConsoleAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}