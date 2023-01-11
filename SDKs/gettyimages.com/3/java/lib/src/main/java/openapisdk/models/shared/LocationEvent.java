package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public LocationEvent withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public LocationEvent withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_province")
    public String stateProvince;
    public LocationEvent withStateProvince(String stateProvince) {
        this.stateProvince = stateProvince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("venue")
    public String venue;
    public LocationEvent withVenue(String venue) {
        this.venue = venue;
        return this;
    }
}