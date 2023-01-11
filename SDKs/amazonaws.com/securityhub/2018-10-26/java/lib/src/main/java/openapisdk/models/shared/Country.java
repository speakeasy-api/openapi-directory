package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Country
 * Information about a country.
**/
public class Country {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountryCode")
    public String countryCode;
    public Country withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountryName")
    public String countryName;
    public Country withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
}