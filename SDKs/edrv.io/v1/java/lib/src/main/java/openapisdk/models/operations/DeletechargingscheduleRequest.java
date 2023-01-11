package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletechargingscheduleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeletechargingscheduleRequestBody request;
    public DeletechargingscheduleRequest withRequest(DeletechargingscheduleRequestBody request) {
        this.request = request;
        return this;
    }
}