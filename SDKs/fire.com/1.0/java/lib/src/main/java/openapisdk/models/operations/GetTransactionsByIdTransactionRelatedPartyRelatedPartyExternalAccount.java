package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount account;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount withAccount(GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum type;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount withType(GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum type) {
        this.type = type;
        return this;
    }
}