package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation
 * Referenced to grid north, referenced to 0 deg meridian of a polar stereographic projection.  Only defined for latitudes greater than 55 degrees and less than -55 degrees (arctic and antarctic).
 * 
**/
public class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public String units;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation withUnits(String units) {
        this.units = units;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation withValue(Double value) {
        this.value = value;
        return this;
    }
}