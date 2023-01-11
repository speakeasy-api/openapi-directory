package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetchargingscheduleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public SetchargingscheduleRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}