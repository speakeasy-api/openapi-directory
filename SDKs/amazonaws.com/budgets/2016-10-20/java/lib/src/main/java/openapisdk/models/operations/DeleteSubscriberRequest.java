package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSubscriberRequest {
    public DeleteSubscriberHeaders headers;
    public DeleteSubscriberRequest withHeaders(DeleteSubscriberHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSubscriberRequest request;
    public DeleteSubscriberRequest withRequest(openapisdk.models.shared.DeleteSubscriberRequest request) {
        this.request = request;
        return this;
    }
}