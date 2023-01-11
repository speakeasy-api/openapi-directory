package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMinuteUsageRequest {
    public GetMinuteUsageHeaders headers;
    public GetMinuteUsageRequest withHeaders(GetMinuteUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetMinuteUsageRequestBody request;
    public GetMinuteUsageRequest withRequest(GetMinuteUsageRequestBody request) {
        this.request = request;
        return this;
    }
}