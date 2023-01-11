package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Locale
 * Locale
**/
public class Locale {
    @JsonProperty("continent")
    public String continent;
    public Locale withContinent(String continent) {
        this.continent = continent;
        return this;
    }
    @JsonProperty("continentCode")
    public String continentCode;
    public Locale withContinentCode(String continentCode) {
        this.continentCode = continentCode;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public Locale withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("countryCode")
    public String countryCode;
    public Locale withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public Locale withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("eu")
    public Boolean eu;
    public Locale withEu(Boolean eu) {
        this.eu = eu;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public Locale withIp(String ip) {
        this.ip = ip;
        return this;
    }
}