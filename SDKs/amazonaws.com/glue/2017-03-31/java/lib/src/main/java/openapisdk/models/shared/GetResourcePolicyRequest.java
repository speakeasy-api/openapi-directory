package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourcePolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public GetResourcePolicyRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}