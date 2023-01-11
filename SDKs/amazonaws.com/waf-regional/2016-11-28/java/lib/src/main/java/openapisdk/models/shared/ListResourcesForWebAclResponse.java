package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourcesForWebAclResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArns")
    public String[] resourceArns;
    public ListResourcesForWebAclResponse withResourceArns(String[] resourceArns) {
        this.resourceArns = resourceArns;
        return this;
    }
}