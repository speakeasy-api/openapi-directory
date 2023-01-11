package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTransactionsRequest {
    @JsonProperty("txid")
    public String txid;
    public GetTransactionsRequest withTxid(String txid) {
        this.txid = txid;
        return this;
    }
}