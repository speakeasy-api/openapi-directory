package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCustomRoutingAcceleratorRequest {
    @JsonProperty("AcceleratorArn")
    public String acceleratorArn;
    public UpdateCustomRoutingAcceleratorRequest withAcceleratorArn(String acceleratorArn) {
        this.acceleratorArn = acceleratorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public UpdateCustomRoutingAcceleratorRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddressType")
    public IpAddressTypeEnum ipAddressType;
    public UpdateCustomRoutingAcceleratorRequest withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateCustomRoutingAcceleratorRequest withName(String name) {
        this.name = name;
        return this;
    }
}