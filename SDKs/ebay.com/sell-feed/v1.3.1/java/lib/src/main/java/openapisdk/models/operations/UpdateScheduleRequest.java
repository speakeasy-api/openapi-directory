package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScheduleRequest {
    public UpdateSchedulePathParams pathParams;
    public UpdateScheduleRequest withPathParams(UpdateSchedulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateUserScheduleRequest request;
    public UpdateScheduleRequest withRequest(openapisdk.models.shared.UpdateUserScheduleRequest request) {
        this.request = request;
        return this;
    }
    public UpdateScheduleSecurity security;
    public UpdateScheduleRequest withSecurity(UpdateScheduleSecurity security) {
        this.security = security;
        return this;
    }
}