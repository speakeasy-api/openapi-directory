package openapisdk.models.operations;



public class UnsubscribeAddressResponse {
    public String contentType;
    public UnsubscribeAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UnsubscribeAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnsubscribeAddress unsubscribeAddress;
    public UnsubscribeAddressResponse withUnsubscribeAddress(openapisdk.models.shared.UnsubscribeAddress unsubscribeAddress) {
        this.unsubscribeAddress = unsubscribeAddress;
        return this;
    }
}