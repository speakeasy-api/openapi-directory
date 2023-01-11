package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSavingsPlanRequest {
    public CreateSavingsPlanHeaders headers;
    public CreateSavingsPlanRequest withHeaders(CreateSavingsPlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSavingsPlanRequestBody request;
    public CreateSavingsPlanRequest withRequest(CreateSavingsPlanRequestBody request) {
        this.request = request;
        return this;
    }
}