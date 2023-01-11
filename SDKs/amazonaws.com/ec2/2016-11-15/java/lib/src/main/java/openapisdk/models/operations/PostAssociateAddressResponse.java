package openapisdk.models.operations;



public class PostAssociateAddressResponse {
    public byte[] body;
    public PostAssociateAddressResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAssociateAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssociateAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}