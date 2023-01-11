package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostArnFilter")
    public String hostArnFilter;
    public ListConnectionsInput withHostArnFilter(String hostArnFilter) {
        this.hostArnFilter = hostArnFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListConnectionsInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListConnectionsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderTypeFilter")
    public ProviderTypeEnum providerTypeFilter;
    public ListConnectionsInput withProviderTypeFilter(ProviderTypeEnum providerTypeFilter) {
        this.providerTypeFilter = providerTypeFilter;
        return this;
    }
}