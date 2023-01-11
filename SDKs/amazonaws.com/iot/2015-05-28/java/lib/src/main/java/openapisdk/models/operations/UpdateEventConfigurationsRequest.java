package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEventConfigurationsRequest {
    public UpdateEventConfigurationsHeaders headers;
    public UpdateEventConfigurationsRequest withHeaders(UpdateEventConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateEventConfigurationsRequestBody request;
    public UpdateEventConfigurationsRequest withRequest(UpdateEventConfigurationsRequestBody request) {
        this.request = request;
        return this;
    }
}