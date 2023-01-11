package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BusinessAccount
 * The type that defines the fields for the business account information.
**/
public class BusinessAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public Address address;
    public BusinessAccount withAddress(Address address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doingBusinessAs")
    public String doingBusinessAs;
    public BusinessAccount withDoingBusinessAs(String doingBusinessAs) {
        this.doingBusinessAs = doingBusinessAs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public BusinessAccount withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BusinessAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContact")
    public Contact primaryContact;
    public BusinessAccount withPrimaryContact(Contact primaryContact) {
        this.primaryContact = primaryContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPhone")
    public Phone primaryPhone;
    public BusinessAccount withPrimaryPhone(Phone primaryPhone) {
        this.primaryPhone = primaryPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryPhone")
    public Phone secondaryPhone;
    public BusinessAccount withSecondaryPhone(Phone secondaryPhone) {
        this.secondaryPhone = secondaryPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public BusinessAccount withWebsite(String website) {
        this.website = website;
        return this;
    }
}