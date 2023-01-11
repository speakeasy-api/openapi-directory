package openapisdk.models.operations;



public class GetUpdateApplicationResponse {
    public byte[] body;
    public GetUpdateApplicationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUpdateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUpdateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}