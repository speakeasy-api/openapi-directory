package openapisdk.models.operations;



public class PostRequestSpotFleetResponse {
    public byte[] body;
    public PostRequestSpotFleetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRequestSpotFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRequestSpotFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}