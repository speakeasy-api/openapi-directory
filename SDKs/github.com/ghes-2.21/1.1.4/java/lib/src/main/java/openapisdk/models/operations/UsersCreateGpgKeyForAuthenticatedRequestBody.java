package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UsersCreateGpgKeyForAuthenticatedRequestBody {
    @JsonProperty("armored_public_key")
    public String armoredPublicKey;
    public UsersCreateGpgKeyForAuthenticatedRequestBody withArmoredPublicKey(String armoredPublicKey) {
        this.armoredPublicKey = armoredPublicKey;
        return this;
    }
}