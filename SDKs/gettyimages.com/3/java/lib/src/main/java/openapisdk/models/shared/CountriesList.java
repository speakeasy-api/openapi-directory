package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CountriesList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public Country[] countries;
    public CountriesList withCountries(Country[] countries) {
        this.countries = countries;
        return this;
    }
}