package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Phone
 * Phone
**/
public class Phone {
    @JsonProperty("code")
    public String code;
    public Phone withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("countryCode")
    public String countryCode;
    public Phone withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("countryName")
    public String countryName;
    public Phone withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
}