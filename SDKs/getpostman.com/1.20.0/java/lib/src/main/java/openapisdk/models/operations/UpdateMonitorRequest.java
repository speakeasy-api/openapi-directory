package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMonitorRequest {
    public UpdateMonitorPathParams pathParams;
    public UpdateMonitorRequest withPathParams(UpdateMonitorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateMonitorRequestBody request;
    public UpdateMonitorRequest withRequest(UpdateMonitorRequestBody request) {
        this.request = request;
        return this;
    }
}