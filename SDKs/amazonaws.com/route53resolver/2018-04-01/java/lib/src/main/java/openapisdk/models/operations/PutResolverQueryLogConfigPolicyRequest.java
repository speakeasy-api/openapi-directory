package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutResolverQueryLogConfigPolicyRequest {
    public PutResolverQueryLogConfigPolicyHeaders headers;
    public PutResolverQueryLogConfigPolicyRequest withHeaders(PutResolverQueryLogConfigPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutResolverQueryLogConfigPolicyRequest request;
    public PutResolverQueryLogConfigPolicyRequest withRequest(openapisdk.models.shared.PutResolverQueryLogConfigPolicyRequest request) {
        this.request = request;
        return this;
    }
}