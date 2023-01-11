package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ExportAddressRequest {
    @JsonProperty("ethaddress")
    public String ethaddress;
    public ExportAddressRequest withEthaddress(String ethaddress) {
        this.ethaddress = ethaddress;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ExportAddressRequest withPassword(String password) {
        this.password = password;
        return this;
    }
}