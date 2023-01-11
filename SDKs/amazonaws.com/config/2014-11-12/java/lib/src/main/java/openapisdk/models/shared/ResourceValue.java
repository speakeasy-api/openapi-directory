package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceValue
 * The dynamic value of the resource.
**/
public class ResourceValue {
    @JsonProperty("Value")
    public ResourceValueTypeEnum value;
    public ResourceValue withValue(ResourceValueTypeEnum value) {
        this.value = value;
        return this;
    }
}