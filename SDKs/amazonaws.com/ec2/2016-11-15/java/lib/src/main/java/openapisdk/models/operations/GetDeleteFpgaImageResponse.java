package openapisdk.models.operations;



public class GetDeleteFpgaImageResponse {
    public byte[] body;
    public GetDeleteFpgaImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteFpgaImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteFpgaImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}