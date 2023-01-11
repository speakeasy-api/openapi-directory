package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePresetRequest {
    public CreatePresetHeaders headers;
    public CreatePresetRequest withHeaders(CreatePresetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreatePresetRequestBody request;
    public CreatePresetRequest withRequest(CreatePresetRequestBody request) {
        this.request = request;
        return this;
    }
}