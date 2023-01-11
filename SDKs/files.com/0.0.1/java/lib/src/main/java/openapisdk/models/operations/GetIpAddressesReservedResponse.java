package openapisdk.models.operations;



public class GetIpAddressesReservedResponse {
    public String contentType;
    public GetIpAddressesReservedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicIpAddressEntity[] publicIpAddressEntities;
    public GetIpAddressesReservedResponse withPublicIpAddressEntities(openapisdk.models.shared.PublicIpAddressEntity[] publicIpAddressEntities) {
        this.publicIpAddressEntities = publicIpAddressEntities;
        return this;
    }
    public Long statusCode;
    public GetIpAddressesReservedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}