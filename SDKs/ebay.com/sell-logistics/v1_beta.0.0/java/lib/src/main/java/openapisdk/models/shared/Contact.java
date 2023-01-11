package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Contact
 * This complex type contains contact information for an individual buyer or seller.
**/
public class Contact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public Contact withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactAddress")
    public ContactAddress contactAddress;
    public Contact withContactAddress(ContactAddress contactAddress) {
        this.contactAddress = contactAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullName")
    public String fullName;
    public Contact withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPhone")
    public PhoneNumber primaryPhone;
    public Contact withPrimaryPhone(PhoneNumber primaryPhone) {
        this.primaryPhone = primaryPhone;
        return this;
    }
}