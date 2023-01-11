package openapisdk.models.operations;



public class GetListVerifiedEmailAddressesResponse {
    public byte[] body;
    public GetListVerifiedEmailAddressesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListVerifiedEmailAddressesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListVerifiedEmailAddressesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}