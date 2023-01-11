package openapisdk.models.operations;



public class GetIpAddressesResponse {
    public String contentType;
    public GetIpAddressesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpAddressEntity[] ipAddressEntities;
    public GetIpAddressesResponse withIpAddressEntities(openapisdk.models.shared.IpAddressEntity[] ipAddressEntities) {
        this.ipAddressEntities = ipAddressEntities;
        return this;
    }
    public Long statusCode;
    public GetIpAddressesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}