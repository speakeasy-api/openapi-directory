package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkProfileResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkProfile")
    public NetworkProfile networkProfile;
    public UpdateNetworkProfileResult withNetworkProfile(NetworkProfile networkProfile) {
        this.networkProfile = networkProfile;
        return this;
    }
}