package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBlueprintRequest {
    public CreateBlueprintHeaders headers;
    public CreateBlueprintRequest withHeaders(CreateBlueprintHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBlueprintRequest request;
    public CreateBlueprintRequest withRequest(openapisdk.models.shared.CreateBlueprintRequest request) {
        this.request = request;
        return this;
    }
}