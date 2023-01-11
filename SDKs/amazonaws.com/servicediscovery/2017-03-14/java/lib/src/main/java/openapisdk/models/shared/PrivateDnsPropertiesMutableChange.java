package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PrivateDnsPropertiesMutableChange
 * Updated DNS properties for the private DNS namespace.
**/
public class PrivateDnsPropertiesMutableChange {
    @JsonProperty("SOA")
    public SoaChange soa;
    public PrivateDnsPropertiesMutableChange withSoa(SoaChange soa) {
        this.soa = soa;
        return this;
    }
}