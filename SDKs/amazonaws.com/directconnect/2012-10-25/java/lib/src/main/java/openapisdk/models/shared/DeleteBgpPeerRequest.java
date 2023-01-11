package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteBgpPeerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asn")
    public Long asn;
    public DeleteBgpPeerRequest withAsn(Long asn) {
        this.asn = asn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bgpPeerId")
    public String bgpPeerId;
    public DeleteBgpPeerRequest withBgpPeerId(String bgpPeerId) {
        this.bgpPeerId = bgpPeerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerAddress")
    public String customerAddress;
    public DeleteBgpPeerRequest withCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public DeleteBgpPeerRequest withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
}