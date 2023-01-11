package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SingularConnectorProfileCredentials
 *  The connector-specific profile credentials required when using Singular. 
**/
public class SingularConnectorProfileCredentials {
    @JsonProperty("apiKey")
    public String apiKey;
    public SingularConnectorProfileCredentials withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}