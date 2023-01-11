package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PhoneNumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("area_code")
    public String areaCode;
    public PhoneNumber withAreaCode(String areaCode) {
        this.areaCode = areaCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_code")
    public String countryCode;
    public PhoneNumber withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension")
    public String extension;
    public PhoneNumber withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PhoneNumber withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("number")
    public String number;
    public PhoneNumber withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PhoneNumberTypeEnum type;
    public PhoneNumber withType(PhoneNumberTypeEnum type) {
        this.type = type;
        return this;
    }
}