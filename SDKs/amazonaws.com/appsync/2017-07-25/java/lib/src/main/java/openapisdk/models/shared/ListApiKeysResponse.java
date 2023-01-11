package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApiKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeys")
    public ApiKey[] apiKeys;
    public ListApiKeysResponse withApiKeys(ApiKey[] apiKeys) {
        this.apiKeys = apiKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListApiKeysResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}