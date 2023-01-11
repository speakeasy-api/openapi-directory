package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApiKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public ApiKey apiKey;
    public UpdateApiKeyResponse withApiKey(ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}