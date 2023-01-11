package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Soa
 * Start of Authority (SOA) properties for a public or private DNS namespace.
**/
public class Soa {
    @JsonProperty("TTL")
    public Long ttl;
    public Soa withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}