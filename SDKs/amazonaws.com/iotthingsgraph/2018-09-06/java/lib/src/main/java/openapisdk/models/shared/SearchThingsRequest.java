package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchThingsRequest {
    @JsonProperty("entityId")
    public String entityId;
    public SearchThingsRequest withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public SearchThingsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceVersion")
    public Long namespaceVersion;
    public SearchThingsRequest withNamespaceVersion(Long namespaceVersion) {
        this.namespaceVersion = namespaceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchThingsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}