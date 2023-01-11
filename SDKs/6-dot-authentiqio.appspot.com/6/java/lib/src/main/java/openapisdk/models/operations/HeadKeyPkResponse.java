package openapisdk.models.operations;



public class HeadKeyPkResponse {
    public byte[] body;
    public HeadKeyPkResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public HeadKeyPkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HeadKeyPkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}