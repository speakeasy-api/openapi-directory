package openapisdk.models.operations;



public class PostDisassociateVpcCidrBlockResponse {
    public byte[] body;
    public PostDisassociateVpcCidrBlockResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDisassociateVpcCidrBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDisassociateVpcCidrBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}