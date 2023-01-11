package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartBlueprintRunRequest {
    public StartBlueprintRunHeaders headers;
    public StartBlueprintRunRequest withHeaders(StartBlueprintRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartBlueprintRunRequest request;
    public StartBlueprintRunRequest withRequest(openapisdk.models.shared.StartBlueprintRunRequest request) {
        this.request = request;
        return this;
    }
}