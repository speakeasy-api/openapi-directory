package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HrisCompanyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public Address[] addresses;
    public HrisCompanyInput withAddresses(Address[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_number")
    public String companyNumber;
    public HrisCompanyInput withCompanyNumber(String companyNumber) {
        this.companyNumber = companyNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debtor_id")
    public String debtorId;
    public HrisCompanyInput withDebtorId(String debtorId) {
        this.debtorId = debtorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public HrisCompanyInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public Email[] emails;
    public HrisCompanyInput withEmails(Email[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonProperty("legal_name")
    public String legalName;
    public HrisCompanyInput withLegalName(String legalName) {
        this.legalName = legalName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public PhoneNumber[] phoneNumbers;
    public HrisCompanyInput withPhoneNumbers(PhoneNumber[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public HrisCompanyStatusEnum status;
    public HrisCompanyInput withStatus(HrisCompanyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subdomain")
    public String subdomain;
    public HrisCompanyInput withSubdomain(String subdomain) {
        this.subdomain = subdomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websites")
    public Website[] websites;
    public HrisCompanyInput withWebsites(Website[] websites) {
        this.websites = websites;
        return this;
    }
}