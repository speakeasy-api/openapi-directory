package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriberRequest {
    public CreateSubscriberHeaders headers;
    public CreateSubscriberRequest withHeaders(CreateSubscriberHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSubscriberRequest request;
    public CreateSubscriberRequest withRequest(openapisdk.models.shared.CreateSubscriberRequest request) {
        this.request = request;
        return this;
    }
}