package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartThingRegistrationTaskRequest {
    public StartThingRegistrationTaskHeaders headers;
    public StartThingRegistrationTaskRequest withHeaders(StartThingRegistrationTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartThingRegistrationTaskRequestBody request;
    public StartThingRegistrationTaskRequest withRequest(StartThingRegistrationTaskRequestBody request) {
        this.request = request;
        return this;
    }
}