package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlueprintRequest {
    public GetBlueprintHeaders headers;
    public GetBlueprintRequest withHeaders(GetBlueprintHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBlueprintRequest request;
    public GetBlueprintRequest withRequest(openapisdk.models.shared.GetBlueprintRequest request) {
        this.request = request;
        return this;
    }
}