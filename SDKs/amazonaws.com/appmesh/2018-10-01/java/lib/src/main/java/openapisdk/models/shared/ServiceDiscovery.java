package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceDiscovery
 * An object representing the service discovery information for a virtual node.
**/
public class ServiceDiscovery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dns")
    public DnsServiceDiscovery dns;
    public ServiceDiscovery withDns(DnsServiceDiscovery dns) {
        this.dns = dns;
        return this;
    }
}