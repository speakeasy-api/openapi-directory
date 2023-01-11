package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BankAccount {
    @JsonProperty("account_number")
    public String accountNumber;
    public BankAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_number_iban")
    public String accountNumberIban;
    public BankAccount withAccountNumberIban(String accountNumberIban) {
        this.accountNumberIban = accountNumberIban;
        return this;
    }
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public BankAccount withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public BankAccount withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public BankAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("need_qr")
    public Boolean needQr;
    public BankAccount withNeedQr(Boolean needQr) {
        this.needQr = needQr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("swift")
    public String swift;
    public BankAccount withSwift(String swift) {
        this.swift = swift;
        return this;
    }
}