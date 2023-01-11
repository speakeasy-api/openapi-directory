package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BusinessCardRecognitionResult
 * Result of recognizing a business card, to extract the key information from the business card
**/
public class BusinessCardRecognitionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressString")
    public String addressString;
    public BusinessCardRecognitionResult withAddressString(String addressString) {
        this.addressString = addressString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessName")
    public String businessName;
    public BusinessCardRecognitionResult withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailAddress")
    public String emailAddress;
    public BusinessCardRecognitionResult withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PersonName")
    public String personName;
    public BusinessCardRecognitionResult withPersonName(String personName) {
        this.personName = personName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PersonTitle")
    public String personTitle;
    public BusinessCardRecognitionResult withPersonTitle(String personTitle) {
        this.personTitle = personTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneNumber")
    public String phoneNumber;
    public BusinessCardRecognitionResult withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public BusinessCardRecognitionResult withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public BusinessCardRecognitionResult withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}