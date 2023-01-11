package openapisdk.models.operations;



public class GetAssociateAddressResponse {
    public byte[] body;
    public GetAssociateAddressResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAssociateAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssociateAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}