package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackendAuthAppleProviderConfig
 * Describes Apple social federation configurations for allowing your app users to sign in using OAuth.
**/
public class BackendAuthAppleProviderConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    public java.util.Map<String, Object> clientId;
    public BackendAuthAppleProviderConfig withClientId(java.util.Map<String, Object> clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public java.util.Map<String, Object> keyId;
    public BackendAuthAppleProviderConfig withKeyId(java.util.Map<String, Object> keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivateKey")
    public java.util.Map<String, Object> privateKey;
    public BackendAuthAppleProviderConfig withPrivateKey(java.util.Map<String, Object> privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TeamId")
    public java.util.Map<String, Object> teamId;
    public BackendAuthAppleProviderConfig withTeamId(java.util.Map<String, Object> teamId) {
        this.teamId = teamId;
        return this;
    }
}