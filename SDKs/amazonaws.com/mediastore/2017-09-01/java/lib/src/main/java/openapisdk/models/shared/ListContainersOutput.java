package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListContainersOutput {
    @JsonProperty("Containers")
    public Container[] containers;
    public ListContainersOutput withContainers(Container[] containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListContainersOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}