package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEthereumBalance {
    @JsonProperty("balance")
    public Double balance;
    public GetEthereumBalance withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @JsonProperty("ethereumaddress")
    public String ethereumaddress;
    public GetEthereumBalance withEthereumaddress(String ethereumaddress) {
        this.ethereumaddress = ethereumaddress;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public GetEthereumBalance withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}