package openapisdk.models.operations;



public class GetConfirmProductInstanceResponse {
    public byte[] body;
    public GetConfirmProductInstanceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetConfirmProductInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConfirmProductInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}