package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MetricDimension
 * Represents a dimension for a customized metric.
**/
public class MetricDimension {
    @JsonProperty("Name")
    public String name;
    public MetricDimension withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public MetricDimension withValue(String value) {
        this.value = value;
        return this;
    }
}