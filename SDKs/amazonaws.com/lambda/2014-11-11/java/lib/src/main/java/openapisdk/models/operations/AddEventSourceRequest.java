package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddEventSourceRequest {
    public AddEventSourceHeaders headers;
    public AddEventSourceRequest withHeaders(AddEventSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddEventSourceRequestBody request;
    public AddEventSourceRequest withRequest(AddEventSourceRequestBody request) {
        this.request = request;
        return this;
    }
}