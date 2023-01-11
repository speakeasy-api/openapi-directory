package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResolverQueryLogConfigRequest {
    public GetResolverQueryLogConfigHeaders headers;
    public GetResolverQueryLogConfigRequest withHeaders(GetResolverQueryLogConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResolverQueryLogConfigRequest request;
    public GetResolverQueryLogConfigRequest withRequest(openapisdk.models.shared.GetResolverQueryLogConfigRequest request) {
        this.request = request;
        return this;
    }
}