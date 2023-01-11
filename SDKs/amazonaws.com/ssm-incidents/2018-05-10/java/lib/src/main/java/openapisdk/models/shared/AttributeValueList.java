package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttributeValueList
 * Use the AttributeValueList to filter by string or integer values.
**/
public class AttributeValueList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integerValues")
    public Long[] integerValues;
    public AttributeValueList withIntegerValues(Long[] integerValues) {
        this.integerValues = integerValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValues")
    public String[] stringValues;
    public AttributeValueList withStringValues(String[] stringValues) {
        this.stringValues = stringValues;
        return this;
    }
}