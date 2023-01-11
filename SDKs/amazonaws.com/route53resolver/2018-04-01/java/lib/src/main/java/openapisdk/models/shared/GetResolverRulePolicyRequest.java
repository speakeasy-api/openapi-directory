package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetResolverRulePolicyRequest {
    @JsonProperty("Arn")
    public String arn;
    public GetResolverRulePolicyRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}