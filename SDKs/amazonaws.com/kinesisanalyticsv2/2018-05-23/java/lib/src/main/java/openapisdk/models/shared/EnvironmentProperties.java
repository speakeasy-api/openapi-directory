package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnvironmentProperties
 * Describes execution properties for a Flink-based Kinesis Data Analytics application.
**/
public class EnvironmentProperties {
    @JsonProperty("PropertyGroups")
    public PropertyGroup[] propertyGroups;
    public EnvironmentProperties withPropertyGroups(PropertyGroup[] propertyGroups) {
        this.propertyGroups = propertyGroups;
        return this;
    }
}