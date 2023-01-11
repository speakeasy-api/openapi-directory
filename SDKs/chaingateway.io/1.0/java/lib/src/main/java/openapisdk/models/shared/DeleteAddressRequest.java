package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAddressRequest {
    @JsonProperty("ethereumaddress")
    public String ethereumaddress;
    public DeleteAddressRequest withEthereumaddress(String ethereumaddress) {
        this.ethereumaddress = ethereumaddress;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public DeleteAddressRequest withPassword(String password) {
        this.password = password;
        return this;
    }
}