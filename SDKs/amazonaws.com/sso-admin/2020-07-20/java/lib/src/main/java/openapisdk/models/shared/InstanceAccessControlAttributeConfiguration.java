package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InstanceAccessControlAttributeConfiguration
 * Specifies the attributes to add to your attribute-based access control (ABAC) configuration.
**/
public class InstanceAccessControlAttributeConfiguration {
    @JsonProperty("AccessControlAttributes")
    public AccessControlAttribute[] accessControlAttributes;
    public InstanceAccessControlAttributeConfiguration withAccessControlAttributes(AccessControlAttribute[] accessControlAttributes) {
        this.accessControlAttributes = accessControlAttributes;
        return this;
    }
}