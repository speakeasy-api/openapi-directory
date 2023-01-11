package openapisdk.models.operations;



public class GetDisableLoggingResponse {
    public byte[] body;
    public GetDisableLoggingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDisableLoggingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDisableLoggingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}