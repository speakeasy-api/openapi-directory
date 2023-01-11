package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateConnectionApiKeyAuthRequestParameters
 * Contains the API key authorization parameters to use to update the connection.
**/
public class UpdateConnectionApiKeyAuthRequestParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiKeyName")
    public String apiKeyName;
    public UpdateConnectionApiKeyAuthRequestParameters withApiKeyName(String apiKeyName) {
        this.apiKeyName = apiKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiKeyValue")
    public String apiKeyValue;
    public UpdateConnectionApiKeyAuthRequestParameters withApiKeyValue(String apiKeyValue) {
        this.apiKeyValue = apiKeyValue;
        return this;
    }
}