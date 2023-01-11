package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Address {
    @JsonProperty("ethereumaddress")
    public String ethereumaddress;
    public Address withEthereumaddress(String ethereumaddress) {
        this.ethereumaddress = ethereumaddress;
        return this;
    }
}