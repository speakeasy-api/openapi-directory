package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateResolverQueryLogConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverQueryLogConfigAssociation")
    public ResolverQueryLogConfigAssociation resolverQueryLogConfigAssociation;
    public DisassociateResolverQueryLogConfigResponse withResolverQueryLogConfigAssociation(ResolverQueryLogConfigAssociation resolverQueryLogConfigAssociation) {
        this.resolverQueryLogConfigAssociation = resolverQueryLogConfigAssociation;
        return this;
    }
}