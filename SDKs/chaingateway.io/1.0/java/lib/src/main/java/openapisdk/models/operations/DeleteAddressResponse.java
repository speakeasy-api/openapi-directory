package openapisdk.models.operations;



public class DeleteAddressResponse {
    public String contentType;
    public DeleteAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.DeleteAddress deleteAddress;
    public DeleteAddressResponse withDeleteAddress(openapisdk.models.shared.DeleteAddress deleteAddress) {
        this.deleteAddress = deleteAddress;
        return this;
    }
}