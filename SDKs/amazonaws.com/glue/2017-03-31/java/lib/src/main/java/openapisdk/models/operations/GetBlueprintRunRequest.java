package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlueprintRunRequest {
    public GetBlueprintRunHeaders headers;
    public GetBlueprintRunRequest withHeaders(GetBlueprintRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBlueprintRunRequest request;
    public GetBlueprintRunRequest withRequest(openapisdk.models.shared.GetBlueprintRunRequest request) {
        this.request = request;
        return this;
    }
}