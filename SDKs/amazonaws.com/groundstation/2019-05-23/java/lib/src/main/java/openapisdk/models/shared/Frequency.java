package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Frequency
 * Object that describes the frequency.
**/
public class Frequency {
    @JsonProperty("units")
    public FrequencyUnitsEnum units;
    public Frequency withUnits(FrequencyUnitsEnum units) {
        this.units = units;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public Frequency withValue(Double value) {
        this.value = value;
        return this;
    }
}