package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstancesHealthStatusRequest {
    public GetInstancesHealthStatusQueryParams queryParams;
    public GetInstancesHealthStatusRequest withQueryParams(GetInstancesHealthStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetInstancesHealthStatusHeaders headers;
    public GetInstancesHealthStatusRequest withHeaders(GetInstancesHealthStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInstancesHealthStatusRequest request;
    public GetInstancesHealthStatusRequest withRequest(openapisdk.models.shared.GetInstancesHealthStatusRequest request) {
        this.request = request;
        return this;
    }
}