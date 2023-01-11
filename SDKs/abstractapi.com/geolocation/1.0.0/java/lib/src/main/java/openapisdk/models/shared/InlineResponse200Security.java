package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InlineResponse200Security {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_vpn")
    public Boolean isVpn;
    public InlineResponse200Security withIsVpn(Boolean isVpn) {
        this.isVpn = isVpn;
        return this;
    }
}