package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlueprintRunsRequest {
    public GetBlueprintRunsQueryParams queryParams;
    public GetBlueprintRunsRequest withQueryParams(GetBlueprintRunsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetBlueprintRunsHeaders headers;
    public GetBlueprintRunsRequest withHeaders(GetBlueprintRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBlueprintRunsRequest request;
    public GetBlueprintRunsRequest withRequest(openapisdk.models.shared.GetBlueprintRunsRequest request) {
        this.request = request;
        return this;
    }
}