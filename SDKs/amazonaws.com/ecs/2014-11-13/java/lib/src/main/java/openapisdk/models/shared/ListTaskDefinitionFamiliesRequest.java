package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTaskDefinitionFamiliesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familyPrefix")
    public String familyPrefix;
    public ListTaskDefinitionFamiliesRequest withFamilyPrefix(String familyPrefix) {
        this.familyPrefix = familyPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListTaskDefinitionFamiliesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTaskDefinitionFamiliesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TaskDefinitionFamilyStatusEnum status;
    public ListTaskDefinitionFamiliesRequest withStatus(TaskDefinitionFamilyStatusEnum status) {
        this.status = status;
        return this;
    }
}