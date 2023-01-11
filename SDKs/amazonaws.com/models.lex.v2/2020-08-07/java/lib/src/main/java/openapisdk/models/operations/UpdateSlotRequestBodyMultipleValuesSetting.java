package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSlotRequestBodyMultipleValuesSetting
 * Indicates whether a slot can return multiple values.
**/
public class UpdateSlotRequestBodyMultipleValuesSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowMultipleValues")
    public Boolean allowMultipleValues;
    public UpdateSlotRequestBodyMultipleValuesSetting withAllowMultipleValues(Boolean allowMultipleValues) {
        this.allowMultipleValues = allowMultipleValues;
        return this;
    }
}