package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionApiKeyAuthResponseParameters
 * Contains the authorization parameters for the connection if API Key is specified as the authorization type.
**/
public class ConnectionApiKeyAuthResponseParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiKeyName")
    public String apiKeyName;
    public ConnectionApiKeyAuthResponseParameters withApiKeyName(String apiKeyName) {
        this.apiKeyName = apiKeyName;
        return this;
    }
}