package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDedicatedIpWarmupAttributesRequest {
    public PutDedicatedIpWarmupAttributesPathParams pathParams;
    public PutDedicatedIpWarmupAttributesRequest withPathParams(PutDedicatedIpWarmupAttributesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutDedicatedIpWarmupAttributesHeaders headers;
    public PutDedicatedIpWarmupAttributesRequest withHeaders(PutDedicatedIpWarmupAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutDedicatedIpWarmupAttributesRequestBody request;
    public PutDedicatedIpWarmupAttributesRequest withRequest(PutDedicatedIpWarmupAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}