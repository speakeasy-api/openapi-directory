package openapisdk.models.operations;



public class PostStopInstancesResponse {
    public byte[] body;
    public PostStopInstancesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostStopInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostStopInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}