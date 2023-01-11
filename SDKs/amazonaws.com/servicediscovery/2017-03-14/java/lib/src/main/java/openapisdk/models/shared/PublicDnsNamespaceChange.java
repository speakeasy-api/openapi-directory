package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublicDnsNamespaceChange
 * Updated properties for the public DNS namespace.
**/
public class PublicDnsNamespaceChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PublicDnsNamespaceChange withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Properties")
    public PublicDnsNamespacePropertiesChange properties;
    public PublicDnsNamespaceChange withProperties(PublicDnsNamespacePropertiesChange properties) {
        this.properties = properties;
        return this;
    }
}