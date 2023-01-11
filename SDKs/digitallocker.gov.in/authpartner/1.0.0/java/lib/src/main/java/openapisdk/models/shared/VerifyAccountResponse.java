package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VerifyAccountResponse {
    @JsonProperty("digilockerid")
    public String digilockerid;
    public VerifyAccountResponse withDigilockerid(String digilockerid) {
        this.digilockerid = digilockerid;
        return this;
    }
    @JsonProperty("registered")
    public String registered;
    public VerifyAccountResponse withRegistered(String registered) {
        this.registered = registered;
        return this;
    }
}