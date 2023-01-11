package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetResolverQueryLogConfigAssociationRequest {
    @JsonProperty("ResolverQueryLogConfigAssociationId")
    public String resolverQueryLogConfigAssociationId;
    public GetResolverQueryLogConfigAssociationRequest withResolverQueryLogConfigAssociationId(String resolverQueryLogConfigAssociationId) {
        this.resolverQueryLogConfigAssociationId = resolverQueryLogConfigAssociationId;
        return this;
    }
}