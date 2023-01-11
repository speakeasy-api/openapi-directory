package openapisdk.models.operations;



public class PostRejectVpcPeeringConnectionResponse {
    public byte[] body;
    public PostRejectVpcPeeringConnectionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRejectVpcPeeringConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRejectVpcPeeringConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}