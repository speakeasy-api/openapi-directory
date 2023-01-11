package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewAddressRequest {
    @JsonProperty("password")
    public String password;
    public NewAddressRequest withPassword(String password) {
        this.password = password;
        return this;
    }
}