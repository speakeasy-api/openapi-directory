package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBlueprintRequest {
    public DeleteBlueprintHeaders headers;
    public DeleteBlueprintRequest withHeaders(DeleteBlueprintHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteBlueprintRequest request;
    public DeleteBlueprintRequest withRequest(openapisdk.models.shared.DeleteBlueprintRequest request) {
        this.request = request;
        return this;
    }
}