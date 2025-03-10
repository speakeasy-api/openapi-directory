/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * BusinessCardRecognitionResult - Result of recognizing a business card, to extract the key information from the business card
 */
public class BusinessCardRecognitionResult {
    /**
     * The address printed on the business card (if included on the business card)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressString")
    public String addressString;

    public BusinessCardRecognitionResult withAddressString(String addressString) {
        this.addressString = addressString;
        return this;
    }
    
    /**
     * The name of the business printed on the business card (if included on the business card)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessName")
    public String businessName;

    public BusinessCardRecognitionResult withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    
    /**
     * The email address printed on the business card (if included on the business card)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailAddress")
    public String emailAddress;

    public BusinessCardRecognitionResult withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    
    /**
     * The name of the person printed on the business card (if included on the business card)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PersonName")
    public String personName;

    public BusinessCardRecognitionResult withPersonName(String personName) {
        this.personName = personName;
        return this;
    }
    
    /**
     * The title of the person printed on the business card (if included on the business card)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PersonTitle")
    public String personTitle;

    public BusinessCardRecognitionResult withPersonTitle(String personTitle) {
        this.personTitle = personTitle;
        return this;
    }
    
    /**
     * The phone number printed on the business card (if included on the business card)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneNumber")
    public String phoneNumber;

    public BusinessCardRecognitionResult withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    
    /**
     * True if the operation was successful, false otherwise
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;

    public BusinessCardRecognitionResult withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
    
    /**
     * The date and time printed on the business card (if included on the business card)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;

    public BusinessCardRecognitionResult withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    
    public BusinessCardRecognitionResult(){}
}
