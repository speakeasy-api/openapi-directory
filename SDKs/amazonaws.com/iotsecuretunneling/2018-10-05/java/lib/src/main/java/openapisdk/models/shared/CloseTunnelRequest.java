package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CloseTunnelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Boolean delete;
    public CloseTunnelRequest withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonProperty("tunnelId")
    public String tunnelId;
    public CloseTunnelRequest withTunnelId(String tunnelId) {
        this.tunnelId = tunnelId;
        return this;
    }
}