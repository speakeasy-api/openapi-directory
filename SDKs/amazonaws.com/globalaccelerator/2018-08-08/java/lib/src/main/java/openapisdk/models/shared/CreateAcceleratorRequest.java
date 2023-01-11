package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAcceleratorRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public CreateAcceleratorRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public CreateAcceleratorRequest withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddressType")
    public IpAddressTypeEnum ipAddressType;
    public CreateAcceleratorRequest withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddresses")
    public String[] ipAddresses;
    public CreateAcceleratorRequest withIpAddresses(String[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateAcceleratorRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateAcceleratorRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}