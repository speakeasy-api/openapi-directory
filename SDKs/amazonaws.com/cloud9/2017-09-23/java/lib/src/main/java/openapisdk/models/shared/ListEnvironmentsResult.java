package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEnvironmentsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentIds")
    public String[] environmentIds;
    public ListEnvironmentsResult withEnvironmentIds(String[] environmentIds) {
        this.environmentIds = environmentIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEnvironmentsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}