package openapisdk.models.operations;



public class PostDisableLoggingResponse {
    public byte[] body;
    public PostDisableLoggingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDisableLoggingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDisableLoggingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}