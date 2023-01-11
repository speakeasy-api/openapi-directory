package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhoneNumberValidateRequestBodyNumberValidateRequest
 * Specifies a phone number to validate and retrieve information about.
**/
public class PhoneNumberValidateRequestBodyNumberValidateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsoCountryCode")
    public String isoCountryCode;
    public PhoneNumberValidateRequestBodyNumberValidateRequest withIsoCountryCode(String isoCountryCode) {
        this.isoCountryCode = isoCountryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneNumber")
    public String phoneNumber;
    public PhoneNumberValidateRequestBodyNumberValidateRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}