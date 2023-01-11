package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TimestreamTimestamp
 * Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
**/
public class TimestreamTimestamp {
    @JsonProperty("unit")
    public String unit;
    public TimestreamTimestamp withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public TimestreamTimestamp withValue(String value) {
        this.value = value;
        return this;
    }
}