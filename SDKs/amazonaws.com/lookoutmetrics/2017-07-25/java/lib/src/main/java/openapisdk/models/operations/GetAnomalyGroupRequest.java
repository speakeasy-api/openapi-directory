package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnomalyGroupRequest {
    public GetAnomalyGroupHeaders headers;
    public GetAnomalyGroupRequest withHeaders(GetAnomalyGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetAnomalyGroupRequestBody request;
    public GetAnomalyGroupRequest withRequest(GetAnomalyGroupRequestBody request) {
        this.request = request;
        return this;
    }
}