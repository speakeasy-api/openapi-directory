package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResolverQueryLogConfigAssociationRequest {
    public GetResolverQueryLogConfigAssociationHeaders headers;
    public GetResolverQueryLogConfigAssociationRequest withHeaders(GetResolverQueryLogConfigAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResolverQueryLogConfigAssociationRequest request;
    public GetResolverQueryLogConfigAssociationRequest withRequest(openapisdk.models.shared.GetResolverQueryLogConfigAssociationRequest request) {
        this.request = request;
        return this;
    }
}