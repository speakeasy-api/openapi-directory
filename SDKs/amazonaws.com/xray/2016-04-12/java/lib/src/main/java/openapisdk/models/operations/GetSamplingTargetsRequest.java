package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSamplingTargetsRequest {
    public GetSamplingTargetsHeaders headers;
    public GetSamplingTargetsRequest withHeaders(GetSamplingTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetSamplingTargetsRequestBody request;
    public GetSamplingTargetsRequest withRequest(GetSamplingTargetsRequestBody request) {
        this.request = request;
        return this;
    }
}