package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IndividualAccount
 * The type that defines the fields for the information of an individual account.
**/
public class IndividualAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public IndividualAccount withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public IndividualAccount withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public IndividualAccount withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPhone")
    public Phone primaryPhone;
    public IndividualAccount withPrimaryPhone(Phone primaryPhone) {
        this.primaryPhone = primaryPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationAddress")
    public Address registrationAddress;
    public IndividualAccount withRegistrationAddress(Address registrationAddress) {
        this.registrationAddress = registrationAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryPhone")
    public Phone secondaryPhone;
    public IndividualAccount withSecondaryPhone(Phone secondaryPhone) {
        this.secondaryPhone = secondaryPhone;
        return this;
    }
}