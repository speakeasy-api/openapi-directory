package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bic")
    public String bic;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nsc")
    public String nsc;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount withNsc(String nsc) {
        this.nsc = nsc;
        return this;
    }
}