package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTriggersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DependentJobName")
    public String dependentJobName;
    public ListTriggersRequest withDependentJobName(String dependentJobName) {
        this.dependentJobName = dependentJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListTriggersRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTriggersRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public ListTriggersRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}