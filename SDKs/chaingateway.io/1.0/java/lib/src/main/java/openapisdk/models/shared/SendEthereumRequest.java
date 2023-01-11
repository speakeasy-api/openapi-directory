package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendEthereumRequest {
    @JsonProperty("amount")
    public Double amount;
    public SendEthereumRequest withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendEthereumRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public SendEthereumRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendEthereumRequest withTo(String to) {
        this.to = to;
        return this;
    }
}