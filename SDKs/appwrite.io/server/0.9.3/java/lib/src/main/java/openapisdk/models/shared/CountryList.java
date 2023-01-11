package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CountryList
 * Countries List
**/
public class CountryList {
    @JsonProperty("countries")
    public Country[] countries;
    public CountryList withCountries(Country[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public CountryList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}