package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBlueprintRequest {
    public UpdateBlueprintHeaders headers;
    public UpdateBlueprintRequest withHeaders(UpdateBlueprintHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateBlueprintRequest request;
    public UpdateBlueprintRequest withRequest(openapisdk.models.shared.UpdateBlueprintRequest request) {
        this.request = request;
        return this;
    }
}