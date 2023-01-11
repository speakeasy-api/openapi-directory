package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConfigRequest {
    public CreateConfigHeaders headers;
    public CreateConfigRequest withHeaders(CreateConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateConfigRequestBody request;
    public CreateConfigRequest withRequest(CreateConfigRequestBody request) {
        this.request = request;
        return this;
    }
}