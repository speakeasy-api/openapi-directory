package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccessControlAttributeValue
 * The value used for mapping a specified attribute to an identity source.
**/
public class AccessControlAttributeValue {
    @JsonProperty("Source")
    public String[] source;
    public AccessControlAttributeValue withSource(String[] source) {
        this.source = source;
        return this;
    }
}