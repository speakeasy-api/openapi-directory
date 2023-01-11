package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVirtualInterfaceAttributesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mtu")
    public Long mtu;
    public UpdateVirtualInterfaceAttributesRequest withMtu(Long mtu) {
        this.mtu = mtu;
        return this;
    }
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public UpdateVirtualInterfaceAttributesRequest withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
}