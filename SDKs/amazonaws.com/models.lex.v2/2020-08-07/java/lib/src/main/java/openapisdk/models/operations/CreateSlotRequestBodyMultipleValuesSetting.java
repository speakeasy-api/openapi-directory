package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSlotRequestBodyMultipleValuesSetting
 * Indicates whether a slot can return multiple values.
**/
public class CreateSlotRequestBodyMultipleValuesSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowMultipleValues")
    public Boolean allowMultipleValues;
    public CreateSlotRequestBodyMultipleValuesSetting withAllowMultipleValues(Boolean allowMultipleValues) {
        this.allowMultipleValues = allowMultipleValues;
        return this;
    }
}