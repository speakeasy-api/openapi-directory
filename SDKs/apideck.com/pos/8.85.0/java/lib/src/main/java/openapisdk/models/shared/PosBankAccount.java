package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PosBankAccount
 * Card details for this payment. This field is currently not available. Reach out to our team for more info.
**/
public class PosBankAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_ownership_type")
    public String accountOwnershipType;
    public PosBankAccount withAccountOwnershipType(String accountOwnershipType) {
        this.accountOwnershipType = accountOwnershipType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ach_details")
    public PosBankAccountAchDetails achDetails;
    public PosBankAccount withAchDetails(PosBankAccountAchDetails achDetails) {
        this.achDetails = achDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_name")
    public String bankName;
    public PosBankAccount withBankName(String bankName) {
        this.bankName = bankName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PosBankAccount withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public PosBankAccount withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statement_description")
    public String statementDescription;
    public PosBankAccount withStatementDescription(String statementDescription) {
        this.statementDescription = statementDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_type")
    public String transferType;
    public PosBankAccount withTransferType(String transferType) {
        this.transferType = transferType;
        return this;
    }
}