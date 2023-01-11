package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentPropertyDescriptions
 * Describes the execution properties for an Apache Flink runtime.
**/
public class EnvironmentPropertyDescriptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PropertyGroupDescriptions")
    public PropertyGroup[] propertyGroupDescriptions;
    public EnvironmentPropertyDescriptions withPropertyGroupDescriptions(PropertyGroup[] propertyGroupDescriptions) {
        this.propertyGroupDescriptions = propertyGroupDescriptions;
        return this;
    }
}