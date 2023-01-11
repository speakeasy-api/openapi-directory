package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PrivateDnsPropertiesMutable
 * DNS properties for the private DNS namespace.
**/
public class PrivateDnsPropertiesMutable {
    @JsonProperty("SOA")
    public Soa soa;
    public PrivateDnsPropertiesMutable withSoa(Soa soa) {
        this.soa = soa;
        return this;
    }
}