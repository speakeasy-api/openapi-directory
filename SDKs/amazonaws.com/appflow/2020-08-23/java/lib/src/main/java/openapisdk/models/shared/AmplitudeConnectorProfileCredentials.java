package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AmplitudeConnectorProfileCredentials
 *  The connector-specific credentials required when using Amplitude. 
**/
public class AmplitudeConnectorProfileCredentials {
    @JsonProperty("apiKey")
    public String apiKey;
    public AmplitudeConnectorProfileCredentials withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonProperty("secretKey")
    public String secretKey;
    public AmplitudeConnectorProfileCredentials withSecretKey(String secretKey) {
        this.secretKey = secretKey;
        return this;
    }
}