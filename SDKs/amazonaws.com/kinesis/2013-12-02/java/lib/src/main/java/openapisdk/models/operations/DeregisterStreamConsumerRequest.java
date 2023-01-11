package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterStreamConsumerRequest {
    public DeregisterStreamConsumerHeaders headers;
    public DeregisterStreamConsumerRequest withHeaders(DeregisterStreamConsumerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterStreamConsumerInput request;
    public DeregisterStreamConsumerRequest withRequest(openapisdk.models.shared.DeregisterStreamConsumerInput request) {
        this.request = request;
        return this;
    }
}