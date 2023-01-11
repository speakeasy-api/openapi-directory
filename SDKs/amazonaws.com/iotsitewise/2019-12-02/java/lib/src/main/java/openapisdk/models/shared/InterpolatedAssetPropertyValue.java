package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InterpolatedAssetPropertyValue
 * Contains information about an interpolated asset property value.
**/
public class InterpolatedAssetPropertyValue {
    @JsonProperty("timestamp")
    public TimeInNanos timestamp;
    public InterpolatedAssetPropertyValue withTimestamp(TimeInNanos timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("value")
    public Variant value;
    public InterpolatedAssetPropertyValue withValue(Variant value) {
        this.value = value;
        return this;
    }
}