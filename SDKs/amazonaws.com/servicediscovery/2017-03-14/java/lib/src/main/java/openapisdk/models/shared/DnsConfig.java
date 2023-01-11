package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsConfig
 * A complex type that contains information about the Amazon Route 53 DNS records that you want Cloud Map to create when you register an instance.
**/
public class DnsConfig {
    @JsonProperty("DnsRecords")
    public DnsRecord[] dnsRecords;
    public DnsConfig withDnsRecords(DnsRecord[] dnsRecords) {
        this.dnsRecords = dnsRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NamespaceId")
    public java.util.Map<String, Object> namespaceId;
    public DnsConfig withNamespaceId(java.util.Map<String, Object> namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoutingPolicy")
    public RoutingPolicyEnum routingPolicy;
    public DnsConfig withRoutingPolicy(RoutingPolicyEnum routingPolicy) {
        this.routingPolicy = routingPolicy;
        return this;
    }
}