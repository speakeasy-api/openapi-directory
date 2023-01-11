package openapisdk.models.operations;



public class PostPutDashboardResponse {
    public byte[] body;
    public PostPutDashboardResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPutDashboardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPutDashboardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}