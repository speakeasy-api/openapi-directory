package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourcesInProtectionGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListResourcesInProtectionGroupResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ResourceArns")
    public String[] resourceArns;
    public ListResourcesInProtectionGroupResponse withResourceArns(String[] resourceArns) {
        this.resourceArns = resourceArns;
        return this;
    }
}