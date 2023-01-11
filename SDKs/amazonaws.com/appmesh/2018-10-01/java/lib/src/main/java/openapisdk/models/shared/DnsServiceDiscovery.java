package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsServiceDiscovery
 * The DNS service discovery information for your virtual node.
**/
public class DnsServiceDiscovery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public DnsServiceDiscovery withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}