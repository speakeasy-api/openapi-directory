package openapisdk.models.operations;



public class ClearAddressResponse {
    public String contentType;
    public ClearAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClearAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ClearAddress clearAddress;
    public ClearAddressResponse withClearAddress(openapisdk.models.shared.ClearAddress clearAddress) {
        this.clearAddress = clearAddress;
        return this;
    }
}