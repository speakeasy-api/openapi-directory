package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTaskDefinitionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTaskDefinitionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskDefinitionArns")
    public String[] taskDefinitionArns;
    public ListTaskDefinitionsResponse withTaskDefinitionArns(String[] taskDefinitionArns) {
        this.taskDefinitionArns = taskDefinitionArns;
        return this;
    }
}