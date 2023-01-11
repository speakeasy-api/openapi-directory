package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProtocolDetails
 * <p> The protocol settings that are configured for your server. </p> <note> <p> This type is only valid in the <code>UpdateServer</code> API. </p> </note>
**/
public class ProtocolDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PassiveIp")
    public String passiveIp;
    public ProtocolDetails withPassiveIp(String passiveIp) {
        this.passiveIp = passiveIp;
        return this;
    }
}