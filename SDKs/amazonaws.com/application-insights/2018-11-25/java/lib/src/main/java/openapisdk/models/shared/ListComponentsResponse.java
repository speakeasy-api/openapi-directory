package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListComponentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationComponentList")
    public ApplicationComponent[] applicationComponentList;
    public ListComponentsResponse withApplicationComponentList(ApplicationComponent[] applicationComponentList) {
        this.applicationComponentList = applicationComponentList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListComponentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}