package openapisdk.models.operations;



public class PostDescribeFleetsResponse {
    public byte[] body;
    public PostDescribeFleetsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeFleetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeFleetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}