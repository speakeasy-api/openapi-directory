package openapisdk.models.operations;



public class PostSetDesiredCapacityResponse {
    public byte[] body;
    public PostSetDesiredCapacityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSetDesiredCapacityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetDesiredCapacityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}