package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SubscribeAddressRequest {
    @JsonProperty("contractaddress")
    public String contractaddress;
    public SubscribeAddressRequest withContractaddress(String contractaddress) {
        this.contractaddress = contractaddress;
        return this;
    }
    @JsonProperty("ethereumaddress")
    public String ethereumaddress;
    public SubscribeAddressRequest withEthereumaddress(String ethereumaddress) {
        this.ethereumaddress = ethereumaddress;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public SubscribeAddressRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}