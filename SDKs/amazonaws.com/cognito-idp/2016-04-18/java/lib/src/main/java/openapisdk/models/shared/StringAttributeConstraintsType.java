package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StringAttributeConstraintsType
 * The constraints associated with a string attribute.
**/
public class StringAttributeConstraintsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxLength")
    public String maxLength;
    public StringAttributeConstraintsType withMaxLength(String maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinLength")
    public String minLength;
    public StringAttributeConstraintsType withMinLength(String minLength) {
        this.minLength = minLength;
        return this;
    }
}