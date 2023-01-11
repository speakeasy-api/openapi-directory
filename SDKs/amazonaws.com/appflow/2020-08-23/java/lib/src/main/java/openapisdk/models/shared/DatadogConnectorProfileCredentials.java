package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DatadogConnectorProfileCredentials
 *  The connector-specific credentials required by Datadog. 
**/
public class DatadogConnectorProfileCredentials {
    @JsonProperty("apiKey")
    public String apiKey;
    public DatadogConnectorProfileCredentials withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonProperty("applicationKey")
    public String applicationKey;
    public DatadogConnectorProfileCredentials withApplicationKey(String applicationKey) {
        this.applicationKey = applicationKey;
        return this;
    }
}