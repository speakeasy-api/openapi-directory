package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * City
 * Information about a city.
**/
public class City {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CityName")
    public String cityName;
    public City withCityName(String cityName) {
        this.cityName = cityName;
        return this;
    }
}