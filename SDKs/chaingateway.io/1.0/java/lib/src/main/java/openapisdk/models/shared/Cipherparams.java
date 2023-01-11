package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Cipherparams {
    @JsonProperty("iv")
    public String iv;
    public Cipherparams withIv(String iv) {
        this.iv = iv;
        return this;
    }
}