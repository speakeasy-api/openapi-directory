package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackendAuthSocialProviderConfig
 * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
**/
public class BackendAuthSocialProviderConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    public java.util.Map<String, Object> clientId;
    public BackendAuthSocialProviderConfig withClientId(java.util.Map<String, Object> clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientSecret")
    public java.util.Map<String, Object> clientSecret;
    public BackendAuthSocialProviderConfig withClientSecret(java.util.Map<String, Object> clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
}