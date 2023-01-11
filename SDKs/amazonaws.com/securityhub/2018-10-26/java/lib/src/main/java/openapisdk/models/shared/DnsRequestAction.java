package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsRequestAction
 * Provided if <code>ActionType</code> is <code>DNS_REQUEST</code>. It provides details about the DNS request that was detected.
**/
public class DnsRequestAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Blocked")
    public Boolean blocked;
    public DnsRequestAction withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domain")
    public String domain;
    public DnsRequestAction withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocol")
    public String protocol;
    public DnsRequestAction withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
}