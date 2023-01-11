package openapisdk.models.operations;



public class NewAddressResponse {
    public String contentType;
    public NewAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NewAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NewAddress newAddress;
    public NewAddressResponse withNewAddress(openapisdk.models.shared.NewAddress newAddress) {
        this.newAddress = newAddress;
        return this;
    }
}