package openapisdk.models.operations;



public class PostRequestSpotInstancesResponse {
    public byte[] body;
    public PostRequestSpotInstancesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRequestSpotInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRequestSpotInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}