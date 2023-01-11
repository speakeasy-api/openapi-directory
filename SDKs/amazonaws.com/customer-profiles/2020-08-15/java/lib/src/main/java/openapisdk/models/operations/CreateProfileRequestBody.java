package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountNumber")
    public String accountNumber;
    public CreateProfileRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalInformation")
    public String additionalInformation;
    public CreateProfileRequestBody withAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address")
    public CreateProfileRequestBodyAddress address;
    public CreateProfileRequestBody withAddress(CreateProfileRequestBodyAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;
    public CreateProfileRequestBody withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillingAddress")
    public CreateProfileRequestBodyBillingAddress billingAddress;
    public CreateProfileRequestBody withBillingAddress(CreateProfileRequestBodyBillingAddress billingAddress) {
        this.billingAddress = billingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BirthDate")
    public String birthDate;
    public CreateProfileRequestBody withBirthDate(String birthDate) {
        this.birthDate = birthDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessEmailAddress")
    public String businessEmailAddress;
    public CreateProfileRequestBody withBusinessEmailAddress(String businessEmailAddress) {
        this.businessEmailAddress = businessEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessName")
    public String businessName;
    public CreateProfileRequestBody withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessPhoneNumber")
    public String businessPhoneNumber;
    public CreateProfileRequestBody withBusinessPhoneNumber(String businessPhoneNumber) {
        this.businessPhoneNumber = businessPhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailAddress")
    public String emailAddress;
    public CreateProfileRequestBody withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstName")
    public String firstName;
    public CreateProfileRequestBody withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Gender")
    public CreateProfileRequestBodyGenderEnum gender;
    public CreateProfileRequestBody withGender(CreateProfileRequestBodyGenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomePhoneNumber")
    public String homePhoneNumber;
    public CreateProfileRequestBody withHomePhoneNumber(String homePhoneNumber) {
        this.homePhoneNumber = homePhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastName")
    public String lastName;
    public CreateProfileRequestBody withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MailingAddress")
    public CreateProfileRequestBodyMailingAddress mailingAddress;
    public CreateProfileRequestBody withMailingAddress(CreateProfileRequestBodyMailingAddress mailingAddress) {
        this.mailingAddress = mailingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MiddleName")
    public String middleName;
    public CreateProfileRequestBody withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MobilePhoneNumber")
    public String mobilePhoneNumber;
    public CreateProfileRequestBody withMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartyType")
    public CreateProfileRequestBodyPartyTypeEnum partyType;
    public CreateProfileRequestBody withPartyType(CreateProfileRequestBodyPartyTypeEnum partyType) {
        this.partyType = partyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PersonalEmailAddress")
    public String personalEmailAddress;
    public CreateProfileRequestBody withPersonalEmailAddress(String personalEmailAddress) {
        this.personalEmailAddress = personalEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneNumber")
    public String phoneNumber;
    public CreateProfileRequestBody withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShippingAddress")
    public CreateProfileRequestBodyShippingAddress shippingAddress;
    public CreateProfileRequestBody withShippingAddress(CreateProfileRequestBodyShippingAddress shippingAddress) {
        this.shippingAddress = shippingAddress;
        return this;
    }
}