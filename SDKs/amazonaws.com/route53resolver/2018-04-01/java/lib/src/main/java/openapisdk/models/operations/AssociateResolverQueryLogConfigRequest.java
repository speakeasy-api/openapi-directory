package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateResolverQueryLogConfigRequest {
    public AssociateResolverQueryLogConfigHeaders headers;
    public AssociateResolverQueryLogConfigRequest withHeaders(AssociateResolverQueryLogConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateResolverQueryLogConfigRequest request;
    public AssociateResolverQueryLogConfigRequest withRequest(openapisdk.models.shared.AssociateResolverQueryLogConfigRequest request) {
        this.request = request;
        return this;
    }
}