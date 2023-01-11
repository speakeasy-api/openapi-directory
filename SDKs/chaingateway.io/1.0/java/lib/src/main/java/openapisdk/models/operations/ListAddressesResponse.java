package openapisdk.models.operations;



public class ListAddressesResponse {
    public String contentType;
    public ListAddressesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListAddressesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ListAddresses listAddresses;
    public ListAddressesResponse withListAddresses(openapisdk.models.shared.ListAddresses listAddresses) {
        this.listAddresses = listAddresses;
        return this;
    }
}