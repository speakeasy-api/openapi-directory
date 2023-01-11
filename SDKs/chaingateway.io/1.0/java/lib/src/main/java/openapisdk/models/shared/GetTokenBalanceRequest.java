package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTokenBalanceRequest {
    @JsonProperty("contractaddress")
    public String contractaddress;
    public GetTokenBalanceRequest withContractaddress(String contractaddress) {
        this.contractaddress = contractaddress;
        return this;
    }
    @JsonProperty("ethereumaddress")
    public String ethereumaddress;
    public GetTokenBalanceRequest withEthereumaddress(String ethereumaddress) {
        this.ethereumaddress = ethereumaddress;
        return this;
    }
}