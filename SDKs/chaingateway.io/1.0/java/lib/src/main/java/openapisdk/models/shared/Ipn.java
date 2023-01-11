package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Ipn {
    @JsonProperty("contractaddress")
    public String contractaddress;
    public Ipn withContractaddress(String contractaddress) {
        this.contractaddress = contractaddress;
        return this;
    }
    @JsonProperty("ethereumaddress")
    public String ethereumaddress;
    public Ipn withEthereumaddress(String ethereumaddress) {
        this.ethereumaddress = ethereumaddress;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Ipn withUrl(String url) {
        this.url = url;
        return this;
    }
}