package openapisdk.models.operations;



public class ListSubscribedAddressesResponse {
    public String contentType;
    public ListSubscribedAddressesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListSubscribedAddressesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ListSubscribedAddresses listSubscribedAddresses;
    public ListSubscribedAddressesResponse withListSubscribedAddresses(openapisdk.models.shared.ListSubscribedAddresses listSubscribedAddresses) {
        this.listSubscribedAddresses = listSubscribedAddresses;
        return this;
    }
}