package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination
 * The angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north.
 * 
**/
public class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public String units;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination withUnits(String units) {
        this.units = units;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination withValue(Double value) {
        this.value = value;
        return this;
    }
}