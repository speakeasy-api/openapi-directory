package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateResolverQueryLogConfigRequest {
    @JsonProperty("ResolverQueryLogConfigId")
    public String resolverQueryLogConfigId;
    public AssociateResolverQueryLogConfigRequest withResolverQueryLogConfigId(String resolverQueryLogConfigId) {
        this.resolverQueryLogConfigId = resolverQueryLogConfigId;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public AssociateResolverQueryLogConfigRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}