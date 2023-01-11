package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetIpAddressTypeRequest {
    @JsonProperty("ipAddressType")
    public IpAddressTypeEnum ipAddressType;
    public SetIpAddressTypeRequest withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public SetIpAddressTypeRequest withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public SetIpAddressTypeRequest withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}