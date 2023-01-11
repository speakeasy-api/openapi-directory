package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity
 * Total magnetic field intensity in nano Teslas.
 * 
**/
public class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public String units;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity withUnits(String units) {
        this.units = units;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity withValue(Double value) {
        this.value = value;
        return this;
    }
}