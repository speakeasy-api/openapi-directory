package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEthereumBalanceRequest {
    @JsonProperty("ethereumaddress")
    public String ethereumaddress;
    public GetEthereumBalanceRequest withEthereumaddress(String ethereumaddress) {
        this.ethereumaddress = ethereumaddress;
        return this;
    }
}