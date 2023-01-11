package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetireGrantRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantId")
    public String grantId;
    public RetireGrantRequest withGrantId(String grantId) {
        this.grantId = grantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantToken")
    public String grantToken;
    public RetireGrantRequest withGrantToken(String grantToken) {
        this.grantToken = grantToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public RetireGrantRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}