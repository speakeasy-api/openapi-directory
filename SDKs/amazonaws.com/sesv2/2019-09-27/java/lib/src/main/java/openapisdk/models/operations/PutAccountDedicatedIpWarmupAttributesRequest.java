package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountDedicatedIpWarmupAttributesRequest {
    public PutAccountDedicatedIpWarmupAttributesHeaders headers;
    public PutAccountDedicatedIpWarmupAttributesRequest withHeaders(PutAccountDedicatedIpWarmupAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutAccountDedicatedIpWarmupAttributesRequestBody request;
    public PutAccountDedicatedIpWarmupAttributesRequest withRequest(PutAccountDedicatedIpWarmupAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}