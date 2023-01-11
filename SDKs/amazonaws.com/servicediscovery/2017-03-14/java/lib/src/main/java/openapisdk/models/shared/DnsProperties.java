package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsProperties
 * A complex type that contains the ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.
**/
public class DnsProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostedZoneId")
    public String hostedZoneId;
    public DnsProperties withHostedZoneId(String hostedZoneId) {
        this.hostedZoneId = hostedZoneId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SOA")
    public Soa soa;
    public DnsProperties withSoa(Soa soa) {
        this.soa = soa;
        return this;
    }
}