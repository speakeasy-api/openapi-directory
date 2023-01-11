package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationConfiguration
 * <p>A remote location where a multi-location fleet can deploy EC2 instances for game hosting. </p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> </p>
**/
public class LocationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public LocationConfiguration withLocation(String location) {
        this.location = location;
        return this;
    }
}