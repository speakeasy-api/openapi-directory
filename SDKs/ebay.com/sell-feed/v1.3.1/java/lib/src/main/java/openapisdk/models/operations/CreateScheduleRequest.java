package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateScheduleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUserScheduleRequest request;
    public CreateScheduleRequest withRequest(openapisdk.models.shared.CreateUserScheduleRequest request) {
        this.request = request;
        return this;
    }
    public CreateScheduleSecurity security;
    public CreateScheduleRequest withSecurity(CreateScheduleSecurity security) {
        this.security = security;
        return this;
    }
}