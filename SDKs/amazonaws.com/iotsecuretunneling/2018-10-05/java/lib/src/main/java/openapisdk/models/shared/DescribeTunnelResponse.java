package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeTunnelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tunnel")
    public Tunnel tunnel;
    public DescribeTunnelResponse withTunnel(Tunnel tunnel) {
        this.tunnel = tunnel;
        return this;
    }
}