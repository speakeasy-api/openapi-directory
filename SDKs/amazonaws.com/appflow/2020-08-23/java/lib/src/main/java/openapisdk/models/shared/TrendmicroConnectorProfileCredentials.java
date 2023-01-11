package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrendmicroConnectorProfileCredentials
 *  The connector-specific profile credentials required when using Trend Micro. 
**/
public class TrendmicroConnectorProfileCredentials {
    @JsonProperty("apiSecretKey")
    public String apiSecretKey;
    public TrendmicroConnectorProfileCredentials withApiSecretKey(String apiSecretKey) {
        this.apiSecretKey = apiSecretKey;
        return this;
    }
}