package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayClientPolicy
 * An object that represents a client policy.
**/
public class VirtualGatewayClientPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls")
    public VirtualGatewayClientPolicyTls tls;
    public VirtualGatewayClientPolicy withTls(VirtualGatewayClientPolicyTls tls) {
        this.tls = tls;
        return this;
    }
}