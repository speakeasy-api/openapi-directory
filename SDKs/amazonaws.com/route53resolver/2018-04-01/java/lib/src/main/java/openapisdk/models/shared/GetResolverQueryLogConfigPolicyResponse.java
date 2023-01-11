package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResolverQueryLogConfigPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverQueryLogConfigPolicy")
    public String resolverQueryLogConfigPolicy;
    public GetResolverQueryLogConfigPolicyResponse withResolverQueryLogConfigPolicy(String resolverQueryLogConfigPolicy) {
        this.resolverQueryLogConfigPolicy = resolverQueryLogConfigPolicy;
        return this;
    }
}