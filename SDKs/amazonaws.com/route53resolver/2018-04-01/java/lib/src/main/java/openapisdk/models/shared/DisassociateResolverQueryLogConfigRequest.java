package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateResolverQueryLogConfigRequest {
    @JsonProperty("ResolverQueryLogConfigId")
    public String resolverQueryLogConfigId;
    public DisassociateResolverQueryLogConfigRequest withResolverQueryLogConfigId(String resolverQueryLogConfigId) {
        this.resolverQueryLogConfigId = resolverQueryLogConfigId;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public DisassociateResolverQueryLogConfigRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}