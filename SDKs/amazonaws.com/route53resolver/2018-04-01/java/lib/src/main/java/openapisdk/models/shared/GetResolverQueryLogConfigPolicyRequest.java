package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetResolverQueryLogConfigPolicyRequest {
    @JsonProperty("Arn")
    public String arn;
    public GetResolverQueryLogConfigPolicyRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}