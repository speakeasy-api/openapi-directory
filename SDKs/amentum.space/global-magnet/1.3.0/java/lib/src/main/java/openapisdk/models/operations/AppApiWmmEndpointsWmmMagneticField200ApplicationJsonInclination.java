package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination
 * Also known as 'dip', is the angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing. 
 * 
**/
public class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public String units;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination withUnits(String units) {
        this.units = units;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination withValue(Double value) {
        this.value = value;
        return this;
    }
}