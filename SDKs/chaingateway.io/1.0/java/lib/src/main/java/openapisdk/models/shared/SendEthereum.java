package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendEthereum {
    @JsonProperty("amount")
    public String amount;
    public SendEthereum withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendEthereum withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public SendEthereum withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendEthereum withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonProperty("txid")
    public String txid;
    public SendEthereum withTxid(String txid) {
        this.txid = txid;
        return this;
    }
}