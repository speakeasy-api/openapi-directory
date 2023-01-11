package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPublicKeyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantTokens")
    public String[] grantTokens;
    public GetPublicKeyRequest withGrantTokens(String[] grantTokens) {
        this.grantTokens = grantTokens;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public GetPublicKeyRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}