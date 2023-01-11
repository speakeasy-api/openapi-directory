package openapisdk.models.operations;



public class PostModifyVpcTenancyResponse {
    public byte[] body;
    public PostModifyVpcTenancyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyVpcTenancyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyVpcTenancyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}