package openapisdk.models.operations;



public class GetGetStatusResponse {
    public byte[] body;
    public GetGetStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGetStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGetStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}