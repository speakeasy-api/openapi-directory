package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SignedTokenRequest {
    @JsonProperty("capability")
    public java.util.Map<String, Object> capability;
    public SignedTokenRequest withCapability(java.util.Map<String, Object> capability) {
        this.capability = capability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public SignedTokenRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("keyName")
    public String keyName;
    public SignedTokenRequest withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @JsonProperty("mac")
    public String mac;
    public SignedTokenRequest withMac(String mac) {
        this.mac = mac;
        return this;
    }
    @JsonProperty("nonce")
    public String nonce;
    public SignedTokenRequest withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
    @JsonProperty("timestamp")
    public Long timestamp;
    public SignedTokenRequest withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}