package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountNumber")
    public String accountNumber;
    public UpdateProfileRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalInformation")
    public String additionalInformation;
    public UpdateProfileRequestBody withAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address")
    public UpdateProfileRequestBodyAddress address;
    public UpdateProfileRequestBody withAddress(UpdateProfileRequestBodyAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;
    public UpdateProfileRequestBody withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillingAddress")
    public UpdateProfileRequestBodyBillingAddress billingAddress;
    public UpdateProfileRequestBody withBillingAddress(UpdateProfileRequestBodyBillingAddress billingAddress) {
        this.billingAddress = billingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BirthDate")
    public String birthDate;
    public UpdateProfileRequestBody withBirthDate(String birthDate) {
        this.birthDate = birthDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessEmailAddress")
    public String businessEmailAddress;
    public UpdateProfileRequestBody withBusinessEmailAddress(String businessEmailAddress) {
        this.businessEmailAddress = businessEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessName")
    public String businessName;
    public UpdateProfileRequestBody withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessPhoneNumber")
    public String businessPhoneNumber;
    public UpdateProfileRequestBody withBusinessPhoneNumber(String businessPhoneNumber) {
        this.businessPhoneNumber = businessPhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailAddress")
    public String emailAddress;
    public UpdateProfileRequestBody withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstName")
    public String firstName;
    public UpdateProfileRequestBody withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Gender")
    public UpdateProfileRequestBodyGenderEnum gender;
    public UpdateProfileRequestBody withGender(UpdateProfileRequestBodyGenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomePhoneNumber")
    public String homePhoneNumber;
    public UpdateProfileRequestBody withHomePhoneNumber(String homePhoneNumber) {
        this.homePhoneNumber = homePhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastName")
    public String lastName;
    public UpdateProfileRequestBody withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MailingAddress")
    public UpdateProfileRequestBodyMailingAddress mailingAddress;
    public UpdateProfileRequestBody withMailingAddress(UpdateProfileRequestBodyMailingAddress mailingAddress) {
        this.mailingAddress = mailingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MiddleName")
    public String middleName;
    public UpdateProfileRequestBody withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MobilePhoneNumber")
    public String mobilePhoneNumber;
    public UpdateProfileRequestBody withMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartyType")
    public UpdateProfileRequestBodyPartyTypeEnum partyType;
    public UpdateProfileRequestBody withPartyType(UpdateProfileRequestBodyPartyTypeEnum partyType) {
        this.partyType = partyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PersonalEmailAddress")
    public String personalEmailAddress;
    public UpdateProfileRequestBody withPersonalEmailAddress(String personalEmailAddress) {
        this.personalEmailAddress = personalEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneNumber")
    public String phoneNumber;
    public UpdateProfileRequestBody withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonProperty("ProfileId")
    public String profileId;
    public UpdateProfileRequestBody withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShippingAddress")
    public UpdateProfileRequestBodyShippingAddress shippingAddress;
    public UpdateProfileRequestBody withShippingAddress(UpdateProfileRequestBodyShippingAddress shippingAddress) {
        this.shippingAddress = shippingAddress;
        return this;
    }
}