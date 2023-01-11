package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MergeProfilesRequestBodyFieldSourceProfileIds
 * A duplicate customer profile that is to be merged into a main profile. 
**/
public class MergeProfilesRequestBodyFieldSourceProfileIds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountNumber")
    public String accountNumber;
    public MergeProfilesRequestBodyFieldSourceProfileIds withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalInformation")
    public String additionalInformation;
    public MergeProfilesRequestBodyFieldSourceProfileIds withAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address")
    public String address;
    public MergeProfilesRequestBodyFieldSourceProfileIds withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;
    public MergeProfilesRequestBodyFieldSourceProfileIds withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillingAddress")
    public String billingAddress;
    public MergeProfilesRequestBodyFieldSourceProfileIds withBillingAddress(String billingAddress) {
        this.billingAddress = billingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BirthDate")
    public String birthDate;
    public MergeProfilesRequestBodyFieldSourceProfileIds withBirthDate(String birthDate) {
        this.birthDate = birthDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessEmailAddress")
    public String businessEmailAddress;
    public MergeProfilesRequestBodyFieldSourceProfileIds withBusinessEmailAddress(String businessEmailAddress) {
        this.businessEmailAddress = businessEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessName")
    public String businessName;
    public MergeProfilesRequestBodyFieldSourceProfileIds withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessPhoneNumber")
    public String businessPhoneNumber;
    public MergeProfilesRequestBodyFieldSourceProfileIds withBusinessPhoneNumber(String businessPhoneNumber) {
        this.businessPhoneNumber = businessPhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailAddress")
    public String emailAddress;
    public MergeProfilesRequestBodyFieldSourceProfileIds withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstName")
    public String firstName;
    public MergeProfilesRequestBodyFieldSourceProfileIds withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Gender")
    public String gender;
    public MergeProfilesRequestBodyFieldSourceProfileIds withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomePhoneNumber")
    public String homePhoneNumber;
    public MergeProfilesRequestBodyFieldSourceProfileIds withHomePhoneNumber(String homePhoneNumber) {
        this.homePhoneNumber = homePhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastName")
    public String lastName;
    public MergeProfilesRequestBodyFieldSourceProfileIds withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MailingAddress")
    public String mailingAddress;
    public MergeProfilesRequestBodyFieldSourceProfileIds withMailingAddress(String mailingAddress) {
        this.mailingAddress = mailingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MiddleName")
    public String middleName;
    public MergeProfilesRequestBodyFieldSourceProfileIds withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MobilePhoneNumber")
    public String mobilePhoneNumber;
    public MergeProfilesRequestBodyFieldSourceProfileIds withMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartyType")
    public String partyType;
    public MergeProfilesRequestBodyFieldSourceProfileIds withPartyType(String partyType) {
        this.partyType = partyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PersonalEmailAddress")
    public String personalEmailAddress;
    public MergeProfilesRequestBodyFieldSourceProfileIds withPersonalEmailAddress(String personalEmailAddress) {
        this.personalEmailAddress = personalEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneNumber")
    public String phoneNumber;
    public MergeProfilesRequestBodyFieldSourceProfileIds withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShippingAddress")
    public String shippingAddress;
    public MergeProfilesRequestBodyFieldSourceProfileIds withShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
        return this;
    }
}