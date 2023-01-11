package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesRequest {
    public GetResourcesQueryParams queryParams;
    public GetResourcesRequest withQueryParams(GetResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetResourcesHeaders headers;
    public GetResourcesRequest withHeaders(GetResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResourcesInput request;
    public GetResourcesRequest withRequest(openapisdk.models.shared.GetResourcesInput request) {
        this.request = request;
        return this;
    }
}