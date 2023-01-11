package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddSshKeyAddSshKeyRequestBody {
    @JsonProperty("publicKey")
    public String publicKey;
    public AddSshKeyAddSshKeyRequestBody withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonProperty("userId")
    public Long userId;
    public AddSshKeyAddSshKeyRequestBody withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}