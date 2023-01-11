package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstancesRequest {
    public GetInstancesHeaders headers;
    public GetInstancesRequest withHeaders(GetInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInstancesRequest request;
    public GetInstancesRequest withRequest(openapisdk.models.shared.GetInstancesRequest request) {
        this.request = request;
        return this;
    }
}