package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutResourcePolicyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;
    public PutResourcePolicyOutput withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}