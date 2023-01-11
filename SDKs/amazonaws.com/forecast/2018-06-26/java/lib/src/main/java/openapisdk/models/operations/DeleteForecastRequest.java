package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteForecastRequest {
    public DeleteForecastHeaders headers;
    public DeleteForecastRequest withHeaders(DeleteForecastHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteForecastRequest request;
    public DeleteForecastRequest withRequest(openapisdk.models.shared.DeleteForecastRequest request) {
        this.request = request;
        return this;
    }
}