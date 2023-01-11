package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SoaChange
 * Updated Start of Authority (SOA) properties for a public or private DNS namespace.
**/
public class SoaChange {
    @JsonProperty("TTL")
    public Long ttl;
    public SoaChange withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}