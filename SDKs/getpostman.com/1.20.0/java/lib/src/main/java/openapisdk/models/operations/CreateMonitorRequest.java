package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMonitorRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMonitorRequestBody request;
    public CreateMonitorRequest withRequest(CreateMonitorRequestBody request) {
        this.request = request;
        return this;
    }
}