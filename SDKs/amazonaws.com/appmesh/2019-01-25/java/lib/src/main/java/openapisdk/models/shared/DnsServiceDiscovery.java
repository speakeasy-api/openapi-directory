package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsServiceDiscovery
 * An object that represents the DNS service discovery information for your virtual node.
**/
public class DnsServiceDiscovery {
    @JsonProperty("hostname")
    public String hostname;
    public DnsServiceDiscovery withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseType")
    public DnsResponseTypeEnum responseType;
    public DnsServiceDiscovery withResponseType(DnsResponseTypeEnum responseType) {
        this.responseType = responseType;
        return this;
    }
}