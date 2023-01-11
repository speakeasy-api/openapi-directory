package openapisdk.models.operations;



public class PostCancelSpotInstanceRequestsResponse {
    public byte[] body;
    public PostCancelSpotInstanceRequestsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCancelSpotInstanceRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCancelSpotInstanceRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}