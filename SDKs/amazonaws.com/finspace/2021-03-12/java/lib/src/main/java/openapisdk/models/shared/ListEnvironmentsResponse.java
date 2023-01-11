package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEnvironmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public Environment[] environments;
    public ListEnvironmentsResponse withEnvironments(Environment[] environments) {
        this.environments = environments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEnvironmentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}