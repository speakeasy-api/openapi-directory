package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTransactions {
    @JsonProperty("ok")
    public Boolean ok;
    public GetTransactions withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
    @JsonProperty("transactions")
    public Transaction[] transactions;
    public GetTransactions withTransactions(Transaction[] transactions) {
        this.transactions = transactions;
        return this;
    }
}