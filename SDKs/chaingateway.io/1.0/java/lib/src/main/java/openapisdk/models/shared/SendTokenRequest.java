package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendTokenRequest {
    @JsonProperty("amount")
    public Integer amount;
    public SendTokenRequest withAmount(Integer amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("contractaddress")
    public String contractaddress;
    public SendTokenRequest withContractaddress(String contractaddress) {
        this.contractaddress = contractaddress;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendTokenRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("identifier")
    public String identifier;
    public SendTokenRequest withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public SendTokenRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendTokenRequest withTo(String to) {
        this.to = to;
        return this;
    }
}