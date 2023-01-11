package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateForecastRequest {
    public CreateForecastHeaders headers;
    public CreateForecastRequest withHeaders(CreateForecastHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateForecastRequest request;
    public CreateForecastRequest withRequest(openapisdk.models.shared.CreateForecastRequest request) {
        this.request = request;
        return this;
    }
}