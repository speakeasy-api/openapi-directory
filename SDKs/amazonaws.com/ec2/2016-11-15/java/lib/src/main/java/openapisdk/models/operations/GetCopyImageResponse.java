package openapisdk.models.operations;



public class GetCopyImageResponse {
    public byte[] body;
    public GetCopyImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCopyImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCopyImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}