package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RevokeGrantRequest {
    @JsonProperty("GrantId")
    public String grantId;
    public RevokeGrantRequest withGrantId(String grantId) {
        this.grantId = grantId;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public RevokeGrantRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}