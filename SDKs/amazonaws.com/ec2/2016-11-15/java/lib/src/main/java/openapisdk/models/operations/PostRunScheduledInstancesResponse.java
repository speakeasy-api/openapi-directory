package openapisdk.models.operations;



public class PostRunScheduledInstancesResponse {
    public byte[] body;
    public PostRunScheduledInstancesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRunScheduledInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRunScheduledInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}