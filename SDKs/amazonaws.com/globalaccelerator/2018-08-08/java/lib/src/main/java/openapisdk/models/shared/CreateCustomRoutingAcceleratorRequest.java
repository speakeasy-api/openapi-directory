package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCustomRoutingAcceleratorRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public CreateCustomRoutingAcceleratorRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public CreateCustomRoutingAcceleratorRequest withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddressType")
    public IpAddressTypeEnum ipAddressType;
    public CreateCustomRoutingAcceleratorRequest withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddresses")
    public String[] ipAddresses;
    public CreateCustomRoutingAcceleratorRequest withIpAddresses(String[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateCustomRoutingAcceleratorRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateCustomRoutingAcceleratorRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}