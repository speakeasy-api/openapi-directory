package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BankAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_name")
    public String accountName;
    public BankAccount withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_number")
    public String accountNumber;
    public BankAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_type")
    public BankAccountAccountTypeEnum accountType;
    public BankAccount withAccountType(BankAccountAccountTypeEnum accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_code")
    public String bankCode;
    public BankAccount withBankCode(String bankCode) {
        this.bankCode = bankCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bic")
    public String bic;
    public BankAccount withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branch_identifier")
    public String branchIdentifier;
    public BankAccount withBranchIdentifier(String branchIdentifier) {
        this.branchIdentifier = branchIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bsb_number")
    public String bsbNumber;
    public BankAccount withBsbNumber(String bsbNumber) {
        this.bsbNumber = bsbNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public BankAccount withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public BankAccount withIban(String iban) {
        this.iban = iban;
        return this;
    }
}