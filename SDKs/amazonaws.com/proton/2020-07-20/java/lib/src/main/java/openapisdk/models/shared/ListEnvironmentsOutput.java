package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEnvironmentsOutput {
    @JsonProperty("environments")
    public EnvironmentSummary[] environments;
    public ListEnvironmentsOutput withEnvironments(EnvironmentSummary[] environments) {
        this.environments = environments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEnvironmentsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}