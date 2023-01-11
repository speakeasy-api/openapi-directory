package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount account;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee withAccount(GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum type;
    public GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee withType(GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum type) {
        this.type = type;
        return this;
    }
}