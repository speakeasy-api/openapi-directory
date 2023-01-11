package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetResolverQueryLogConfigRequest {
    @JsonProperty("ResolverQueryLogConfigId")
    public String resolverQueryLogConfigId;
    public GetResolverQueryLogConfigRequest withResolverQueryLogConfigId(String resolverQueryLogConfigId) {
        this.resolverQueryLogConfigId = resolverQueryLogConfigId;
        return this;
    }
}