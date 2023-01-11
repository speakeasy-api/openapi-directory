package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClearAddressRequest {
    @JsonProperty("ethereumaddress")
    public String ethereumaddress;
    public ClearAddressRequest withEthereumaddress(String ethereumaddress) {
        this.ethereumaddress = ethereumaddress;
        return this;
    }
    @JsonProperty("newaddress")
    public String newaddress;
    public ClearAddressRequest withNewaddress(String newaddress) {
        this.newaddress = newaddress;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ClearAddressRequest withPassword(String password) {
        this.password = password;
        return this;
    }
}