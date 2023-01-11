package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtendedContact
 * This type contains shipping and contact information for a buyer or an eBay shipping partner.
**/
public class ExtendedContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public ExtendedContact withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactAddress")
    public Address contactAddress;
    public ExtendedContact withContactAddress(Address contactAddress) {
        this.contactAddress = contactAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ExtendedContact withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullName")
    public String fullName;
    public ExtendedContact withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPhone")
    public PhoneNumber primaryPhone;
    public ExtendedContact withPrimaryPhone(PhoneNumber primaryPhone) {
        this.primaryPhone = primaryPhone;
        return this;
    }
}