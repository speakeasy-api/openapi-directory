package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListNotificationRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public openapisdk.models.shared.ListNotificationRulesFilter[] filters;
    public ListNotificationRulesRequestBody withFilters(openapisdk.models.shared.ListNotificationRulesFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListNotificationRulesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListNotificationRulesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}