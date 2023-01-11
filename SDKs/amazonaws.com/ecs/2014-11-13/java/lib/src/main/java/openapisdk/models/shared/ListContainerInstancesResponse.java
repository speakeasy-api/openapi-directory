package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListContainerInstancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerInstanceArns")
    public String[] containerInstanceArns;
    public ListContainerInstancesResponse withContainerInstanceArns(String[] containerInstanceArns) {
        this.containerInstanceArns = containerInstanceArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListContainerInstancesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}