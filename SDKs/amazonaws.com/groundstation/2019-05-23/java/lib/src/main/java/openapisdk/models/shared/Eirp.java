package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Eirp
 * Object that represents EIRP.
**/
public class Eirp {
    @JsonProperty("units")
    public EirpUnitsEnum units;
    public Eirp withUnits(EirpUnitsEnum units) {
        this.units = units;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public Eirp withValue(Double value) {
        this.value = value;
        return this;
    }
}