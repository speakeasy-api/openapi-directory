package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NumberValidateResponse
 * Provides information about a phone number.
**/
public class NumberValidateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Carrier")
    public String carrier;
    public NumberValidateResponse withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;
    public NumberValidateResponse withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CleansedPhoneNumberE164")
    public String cleansedPhoneNumberE164;
    public NumberValidateResponse withCleansedPhoneNumberE164(String cleansedPhoneNumberE164) {
        this.cleansedPhoneNumberE164 = cleansedPhoneNumberE164;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CleansedPhoneNumberNational")
    public String cleansedPhoneNumberNational;
    public NumberValidateResponse withCleansedPhoneNumberNational(String cleansedPhoneNumberNational) {
        this.cleansedPhoneNumberNational = cleansedPhoneNumberNational;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public NumberValidateResponse withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountryCodeIso2")
    public String countryCodeIso2;
    public NumberValidateResponse withCountryCodeIso2(String countryCodeIso2) {
        this.countryCodeIso2 = countryCodeIso2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountryCodeNumeric")
    public String countryCodeNumeric;
    public NumberValidateResponse withCountryCodeNumeric(String countryCodeNumeric) {
        this.countryCodeNumeric = countryCodeNumeric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("County")
    public String county;
    public NumberValidateResponse withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OriginalCountryCodeIso2")
    public String originalCountryCodeIso2;
    public NumberValidateResponse withOriginalCountryCodeIso2(String originalCountryCodeIso2) {
        this.originalCountryCodeIso2 = originalCountryCodeIso2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OriginalPhoneNumber")
    public String originalPhoneNumber;
    public NumberValidateResponse withOriginalPhoneNumber(String originalPhoneNumber) {
        this.originalPhoneNumber = originalPhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneType")
    public String phoneType;
    public NumberValidateResponse withPhoneType(String phoneType) {
        this.phoneType = phoneType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneTypeCode")
    public Long phoneTypeCode;
    public NumberValidateResponse withPhoneTypeCode(Long phoneTypeCode) {
        this.phoneTypeCode = phoneTypeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timezone")
    public String timezone;
    public NumberValidateResponse withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ZipCode")
    public String zipCode;
    public NumberValidateResponse withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}