package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DnsConfigChange
 * A complex type that contains information about changes to the Route 53 DNS records that Cloud Map creates when you register an instance.
**/
public class DnsConfigChange {
    @JsonProperty("DnsRecords")
    public DnsRecord[] dnsRecords;
    public DnsConfigChange withDnsRecords(DnsRecord[] dnsRecords) {
        this.dnsRecords = dnsRecords;
        return this;
    }
}