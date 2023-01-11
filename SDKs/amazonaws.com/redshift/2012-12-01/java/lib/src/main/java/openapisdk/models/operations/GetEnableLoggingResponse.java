package openapisdk.models.operations;



public class GetEnableLoggingResponse {
    public byte[] body;
    public GetEnableLoggingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetEnableLoggingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEnableLoggingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}