package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MultipleValuesSetting
 * Indicates whether a slot can return multiple values.
**/
public class MultipleValuesSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowMultipleValues")
    public Boolean allowMultipleValues;
    public MultipleValuesSetting withAllowMultipleValues(Boolean allowMultipleValues) {
        this.allowMultipleValues = allowMultipleValues;
        return this;
    }
}