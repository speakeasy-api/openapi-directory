package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientPolicy
 * An object that represents a client policy.
**/
public class ClientPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls")
    public ClientPolicyTls tls;
    public ClientPolicy withTls(ClientPolicyTls tls) {
        this.tls = tls;
        return this;
    }
}