package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutResolverQueryLogConfigPolicyRequest {
    @JsonProperty("Arn")
    public String arn;
    public PutResolverQueryLogConfigPolicyRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("ResolverQueryLogConfigPolicy")
    public String resolverQueryLogConfigPolicy;
    public PutResolverQueryLogConfigPolicyRequest withResolverQueryLogConfigPolicy(String resolverQueryLogConfigPolicy) {
        this.resolverQueryLogConfigPolicy = resolverQueryLogConfigPolicy;
        return this;
    }
}