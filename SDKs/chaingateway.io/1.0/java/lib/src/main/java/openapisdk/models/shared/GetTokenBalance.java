package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTokenBalance {
    @JsonProperty("balance")
    public Integer balance;
    public GetTokenBalance withBalance(Integer balance) {
        this.balance = balance;
        return this;
    }
    @JsonProperty("contractaddress")
    public String contractaddress;
    public GetTokenBalance withContractaddress(String contractaddress) {
        this.contractaddress = contractaddress;
        return this;
    }
    @JsonProperty("ethereumaddress")
    public String ethereumaddress;
    public GetTokenBalance withEthereumaddress(String ethereumaddress) {
        this.ethereumaddress = ethereumaddress;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public GetTokenBalance withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}