package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewAddress {
    @JsonProperty("ethereumaddress")
    public String ethereumaddress;
    public NewAddress withEthereumaddress(String ethereumaddress) {
        this.ethereumaddress = ethereumaddress;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public NewAddress withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public NewAddress withPassword(String password) {
        this.password = password;
        return this;
    }
}