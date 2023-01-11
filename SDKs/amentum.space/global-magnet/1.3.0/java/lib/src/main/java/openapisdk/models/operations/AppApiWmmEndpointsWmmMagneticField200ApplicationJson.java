package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppApiWmmEndpointsWmmMagneticField200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("declination")
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination declination;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJson withDeclination(AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination declination) {
        this.declination = declination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grid_variation")
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation gridVariation;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJson withGridVariation(AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation gridVariation) {
        this.gridVariation = gridVariation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inclination")
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination inclination;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJson withInclination(AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination inclination) {
        this.inclination = inclination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_intensity")
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity totalIntensity;
    public AppApiWmmEndpointsWmmMagneticField200ApplicationJson withTotalIntensity(AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity totalIntensity) {
        this.totalIntensity = totalIntensity;
        return this;
    }
}