package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscriberRequest {
    public UpdateSubscriberHeaders headers;
    public UpdateSubscriberRequest withHeaders(UpdateSubscriberHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateSubscriberRequest request;
    public UpdateSubscriberRequest withRequest(openapisdk.models.shared.UpdateSubscriberRequest request) {
        this.request = request;
        return this;
    }
}