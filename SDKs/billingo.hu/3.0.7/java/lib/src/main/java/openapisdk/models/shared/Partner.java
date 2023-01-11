package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Partner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_number")
    public String accountNumber;
    public Partner withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("address")
    public Address address;
    public Partner withAddress(Address address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public String[] emails;
    public Partner withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("general_ledger_number")
    public String generalLedgerNumber;
    public Partner withGeneralLedgerNumber(String generalLedgerNumber) {
        this.generalLedgerNumber = generalLedgerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public Partner withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Partner withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Partner withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public Partner withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("swift")
    public String swift;
    public Partner withSwift(String swift) {
        this.swift = swift;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxcode")
    public String taxcode;
    public Partner withTaxcode(String taxcode) {
        this.taxcode = taxcode;
        return this;
    }
}