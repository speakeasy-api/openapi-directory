package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTunnelRequest {
    @JsonProperty("tunnelId")
    public String tunnelId;
    public DescribeTunnelRequest withTunnelId(String tunnelId) {
        this.tunnelId = tunnelId;
        return this;
    }
}