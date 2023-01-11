package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTaskDefinitionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familyPrefix")
    public String familyPrefix;
    public ListTaskDefinitionsRequest withFamilyPrefix(String familyPrefix) {
        this.familyPrefix = familyPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListTaskDefinitionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTaskDefinitionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public SortOrderEnum sort;
    public ListTaskDefinitionsRequest withSort(SortOrderEnum sort) {
        this.sort = sort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TaskDefinitionStatusEnum status;
    public ListTaskDefinitionsRequest withStatus(TaskDefinitionStatusEnum status) {
        this.status = status;
        return this;
    }
}