package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TokenRequest {
    @JsonProperty("capability")
    public java.util.Map<String, Object> capability;
    public TokenRequest withCapability(java.util.Map<String, Object> capability) {
        this.capability = capability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public TokenRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("keyName")
    public String keyName;
    public TokenRequest withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @JsonProperty("nonce")
    public String nonce;
    public TokenRequest withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
    @JsonProperty("timestamp")
    public Long timestamp;
    public TokenRequest withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}