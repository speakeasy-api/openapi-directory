package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSecretVersionIdsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeDeprecated")
    public Boolean includeDeprecated;
    public ListSecretVersionIdsRequest withIncludeDeprecated(Boolean includeDeprecated) {
        this.includeDeprecated = includeDeprecated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListSecretVersionIdsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListSecretVersionIdsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("SecretId")
    public String secretId;
    public ListSecretVersionIdsRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}