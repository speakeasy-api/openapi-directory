package openapisdk.models.operations;



public class GetRejectVpcPeeringConnectionResponse {
    public byte[] body;
    public GetRejectVpcPeeringConnectionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRejectVpcPeeringConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRejectVpcPeeringConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}