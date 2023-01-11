package openapisdk.models.operations;



public class SubscribeAddressResponse {
    public String contentType;
    public SubscribeAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SubscribeAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscribeAddress subscribeAddress;
    public SubscribeAddressResponse withSubscribeAddress(openapisdk.models.shared.SubscribeAddress subscribeAddress) {
        this.subscribeAddress = subscribeAddress;
        return this;
    }
}