package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bic")
    public String bic;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nsc")
    public String nsc;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount withNsc(String nsc) {
        this.nsc = nsc;
        return this;
    }
}