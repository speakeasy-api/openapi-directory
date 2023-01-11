package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentBankAccount {
    @JsonProperty("account_number")
    public String accountNumber;
    public DocumentBankAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_number_iban")
    public String accountNumberIban;
    public DocumentBankAccount withAccountNumberIban(String accountNumberIban) {
        this.accountNumberIban = accountNumberIban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DocumentBankAccount withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DocumentBankAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("swift")
    public String swift;
    public DocumentBankAccount withSwift(String swift) {
        this.swift = swift;
        return this;
    }
}