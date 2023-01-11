package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CompanyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abn_branch")
    public String abnBranch;
    public CompanyInput withAbnBranch(String abnBranch) {
        this.abnBranch = abnBranch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abn_or_tfn")
    public String abnOrTfn;
    public CompanyInput withAbnOrTfn(String abnOrTfn) {
        this.abnOrTfn = abnOrTfn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acn")
    public String acn;
    public CompanyInput withAcn(String acn) {
        this.acn = acn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public Address[] addresses;
    public CompanyInput withAddresses(Address[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annual_revenue")
    public String annualRevenue;
    public CompanyInput withAnnualRevenue(String annualRevenue) {
        this.annualRevenue = annualRevenue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_accounts")
    public BankAccount[] bankAccounts;
    public CompanyInput withBankAccounts(BankAccount[] bankAccounts) {
        this.bankAccounts = bankAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthday")
    public LocalDate birthday;
    public CompanyInput withBirthday(LocalDate birthday) {
        this.birthday = birthday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public CompanyInput withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public CustomField[] customFields;
    public CompanyInput withCustomFields(CustomField[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CompanyInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public Email[] emails;
    public CompanyInput withEmails(Email[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public String fax;
    public CompanyInput withFax(String fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public CompanyInput withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public CompanyInput withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("industry")
    public String industry;
    public CompanyInput withIndustry(String industry) {
        this.industry = industry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public CompanyInput withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CompanyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_of_employees")
    public String numberOfEmployees;
    public CompanyInput withNumberOfEmployees(String numberOfEmployees) {
        this.numberOfEmployees = numberOfEmployees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner_id")
    public String ownerId;
    public CompanyInput withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownership")
    public String ownership;
    public CompanyInput withOwnership(String ownership) {
        this.ownership = ownership;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_number")
    public String payeeNumber;
    public CompanyInput withPayeeNumber(String payeeNumber) {
        this.payeeNumber = payeeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public PhoneNumber[] phoneNumbers;
    public CompanyInput withPhoneNumbers(PhoneNumber[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read_only")
    public Boolean readOnly;
    public CompanyInput withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row_type")
    public CompanyCompanyRowType rowType;
    public CompanyInput withRowType(CompanyCompanyRowType rowType) {
        this.rowType = rowType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sales_tax_number")
    public String salesTaxNumber;
    public CompanyInput withSalesTaxNumber(String salesTaxNumber) {
        this.salesTaxNumber = salesTaxNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salutation")
    public String salutation;
    public CompanyInput withSalutation(String salutation) {
        this.salutation = salutation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("social_links")
    public SocialLink[] socialLinks;
    public CompanyInput withSocialLinks(SocialLink[] socialLinks) {
        this.socialLinks = socialLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public CompanyInput withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public CompanyInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vat_number")
    public String vatNumber;
    public CompanyInput withVatNumber(String vatNumber) {
        this.vatNumber = vatNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websites")
    public Website[] websites;
    public CompanyInput withWebsites(Website[] websites) {
        this.websites = websites;
        return this;
    }
}