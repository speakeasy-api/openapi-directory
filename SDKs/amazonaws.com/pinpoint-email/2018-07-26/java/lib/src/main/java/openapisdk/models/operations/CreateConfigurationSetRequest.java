package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConfigurationSetRequest {
    public CreateConfigurationSetHeaders headers;
    public CreateConfigurationSetRequest withHeaders(CreateConfigurationSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateConfigurationSetRequestBody request;
    public CreateConfigurationSetRequest withRequest(CreateConfigurationSetRequestBody request) {
        this.request = request;
        return this;
    }
}