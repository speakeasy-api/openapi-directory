package openapisdk.models.operations;



public class PostDescribeSuggestersResponse {
    public byte[] body;
    public PostDescribeSuggestersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeSuggestersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeSuggestersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}