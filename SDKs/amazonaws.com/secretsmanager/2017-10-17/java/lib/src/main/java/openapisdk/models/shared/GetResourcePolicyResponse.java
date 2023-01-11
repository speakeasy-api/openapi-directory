package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourcePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ARN")
    public String arn;
    public GetResourcePolicyResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GetResourcePolicyResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourcePolicy")
    public String resourcePolicy;
    public GetResourcePolicyResponse withResourcePolicy(String resourcePolicy) {
        this.resourcePolicy = resourcePolicy;
        return this;
    }
}