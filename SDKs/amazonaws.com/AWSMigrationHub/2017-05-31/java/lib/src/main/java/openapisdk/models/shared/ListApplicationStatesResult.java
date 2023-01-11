package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApplicationStatesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationStateList")
    public ApplicationState[] applicationStateList;
    public ListApplicationStatesResult withApplicationStateList(ApplicationState[] applicationStateList) {
        this.applicationStateList = applicationStateList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListApplicationStatesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}