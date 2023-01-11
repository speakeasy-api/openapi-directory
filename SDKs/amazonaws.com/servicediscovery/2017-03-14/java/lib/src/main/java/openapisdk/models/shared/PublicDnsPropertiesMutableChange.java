package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PublicDnsPropertiesMutableChange
 * Updated DNS properties for the public DNS namespace.
**/
public class PublicDnsPropertiesMutableChange {
    @JsonProperty("SOA")
    public SoaChange soa;
    public PublicDnsPropertiesMutableChange withSoa(SoaChange soa) {
        this.soa = soa;
        return this;
    }
}