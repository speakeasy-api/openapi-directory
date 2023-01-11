package openapisdk.models.operations;



public class GetSiteIpAddressesResponse {
    public String contentType;
    public GetSiteIpAddressesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpAddressEntity[] ipAddressEntities;
    public GetSiteIpAddressesResponse withIpAddressEntities(openapisdk.models.shared.IpAddressEntity[] ipAddressEntities) {
        this.ipAddressEntities = ipAddressEntities;
        return this;
    }
    public Long statusCode;
    public GetSiteIpAddressesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}