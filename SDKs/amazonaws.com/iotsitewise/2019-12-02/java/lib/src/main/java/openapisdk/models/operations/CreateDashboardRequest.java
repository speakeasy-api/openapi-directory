package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDashboardRequest {
    public CreateDashboardHeaders headers;
    public CreateDashboardRequest withHeaders(CreateDashboardHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDashboardRequestBody request;
    public CreateDashboardRequest withRequest(CreateDashboardRequestBody request) {
        this.request = request;
        return this;
    }
}