package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResolverQueryLogConfigPolicyRequest {
    public GetResolverQueryLogConfigPolicyHeaders headers;
    public GetResolverQueryLogConfigPolicyRequest withHeaders(GetResolverQueryLogConfigPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResolverQueryLogConfigPolicyRequest request;
    public GetResolverQueryLogConfigPolicyRequest withRequest(openapisdk.models.shared.GetResolverQueryLogConfigPolicyRequest request) {
        this.request = request;
        return this;
    }
}