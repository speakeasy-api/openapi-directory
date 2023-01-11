package openapisdk.models.operations;



public class PostDescribeNotificationConfigurationsResponse {
    public byte[] body;
    public PostDescribeNotificationConfigurationsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeNotificationConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeNotificationConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}