package openapisdk.models.operations;



public class PostEnableLoggingResponse {
    public byte[] body;
    public PostEnableLoggingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostEnableLoggingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostEnableLoggingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}