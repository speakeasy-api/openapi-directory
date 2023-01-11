package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BankAccountInput {
    @JsonProperty("account_number")
    public String accountNumber;
    public BankAccountInput withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_number_iban")
    public String accountNumberIban;
    public BankAccountInput withAccountNumberIban(String accountNumberIban) {
        this.accountNumberIban = accountNumberIban;
        return this;
    }
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public BankAccountInput withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public BankAccountInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("need_qr")
    public Boolean needQr;
    public BankAccountInput withNeedQr(Boolean needQr) {
        this.needQr = needQr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("swift")
    public String swift;
    public BankAccountInput withSwift(String swift) {
        this.swift = swift;
        return this;
    }
}