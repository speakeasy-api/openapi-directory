package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DynatraceConnectorProfileCredentials
 *  The connector-specific profile credentials required by Dynatrace. 
**/
public class DynatraceConnectorProfileCredentials {
    @JsonProperty("apiToken")
    public String apiToken;
    public DynatraceConnectorProfileCredentials withApiToken(String apiToken) {
        this.apiToken = apiToken;
        return this;
    }
}