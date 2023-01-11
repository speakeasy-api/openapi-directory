package openapisdk.models.operations;



public class GetGetConsoleOutputResponse {
    public byte[] body;
    public GetGetConsoleOutputResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGetConsoleOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGetConsoleOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}