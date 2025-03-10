/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PhoneNumberValidateRequestBodyNumberValidateRequest - Specifies a phone number to validate and retrieve information about.
 */
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
    
    public PhoneNumberValidateRequestBodyNumberValidateRequest(){}
}
