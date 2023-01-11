package openapisdk.models.operations;



public class PostModifyVpcEndpointConnectionNotificationResponse {
    public byte[] body;
    public PostModifyVpcEndpointConnectionNotificationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyVpcEndpointConnectionNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyVpcEndpointConnectionNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}