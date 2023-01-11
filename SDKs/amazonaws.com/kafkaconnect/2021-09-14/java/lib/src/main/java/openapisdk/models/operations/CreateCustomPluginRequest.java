package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomPluginRequest {
    public CreateCustomPluginHeaders headers;
    public CreateCustomPluginRequest withHeaders(CreateCustomPluginHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCustomPluginRequestBody request;
    public CreateCustomPluginRequest withRequest(CreateCustomPluginRequestBody request) {
        this.request = request;
        return this;
    }
}