package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount account;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount withAccount(GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum type;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount withType(GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum type) {
        this.type = type;
        return this;
    }
}