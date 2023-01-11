package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateDnsNamespaceChange
 * Updated properties for the private DNS namespace.
**/
public class PrivateDnsNamespaceChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PrivateDnsNamespaceChange withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Properties")
    public PrivateDnsNamespacePropertiesChange properties;
    public PrivateDnsNamespaceChange withProperties(PrivateDnsNamespacePropertiesChange properties) {
        this.properties = properties;
        return this;
    }
}