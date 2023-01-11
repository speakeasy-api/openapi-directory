package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PublicDnsPropertiesMutable
 * DNS properties for the public DNS namespace.
**/
public class PublicDnsPropertiesMutable {
    @JsonProperty("SOA")
    public Soa soa;
    public PublicDnsPropertiesMutable withSoa(Soa soa) {
        this.soa = soa;
        return this;
    }
}