package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteResolverQueryLogConfigRequest {
    @JsonProperty("ResolverQueryLogConfigId")
    public String resolverQueryLogConfigId;
    public DeleteResolverQueryLogConfigRequest withResolverQueryLogConfigId(String resolverQueryLogConfigId) {
        this.resolverQueryLogConfigId = resolverQueryLogConfigId;
        return this;
    }
}