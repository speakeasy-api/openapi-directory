package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBgpPeerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newBGPPeer")
    public NewBgpPeer newBGPPeer;
    public CreateBgpPeerRequest withNewBgpPeer(NewBgpPeer newBGPPeer) {
        this.newBGPPeer = newBGPPeer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public CreateBgpPeerRequest withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
}