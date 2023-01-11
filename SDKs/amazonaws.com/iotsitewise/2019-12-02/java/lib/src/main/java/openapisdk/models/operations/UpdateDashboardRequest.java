package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDashboardRequest {
    public UpdateDashboardPathParams pathParams;
    public UpdateDashboardRequest withPathParams(UpdateDashboardPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDashboardHeaders headers;
    public UpdateDashboardRequest withHeaders(UpdateDashboardHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDashboardRequestBody request;
    public UpdateDashboardRequest withRequest(UpdateDashboardRequestBody request) {
        this.request = request;
        return this;
    }
}