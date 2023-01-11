package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DnsRecord
 * A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.
**/
public class DnsRecord {
    @JsonProperty("TTL")
    public Long ttl;
    public DnsRecord withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonProperty("Type")
    public RecordTypeEnum type;
    public DnsRecord withType(RecordTypeEnum type) {
        this.type = type;
        return this;
    }
}