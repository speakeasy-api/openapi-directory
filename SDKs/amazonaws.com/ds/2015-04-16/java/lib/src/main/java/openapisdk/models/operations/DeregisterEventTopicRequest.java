package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterEventTopicRequest {
    public DeregisterEventTopicHeaders headers;
    public DeregisterEventTopicRequest withHeaders(DeregisterEventTopicHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterEventTopicRequest request;
    public DeregisterEventTopicRequest withRequest(openapisdk.models.shared.DeregisterEventTopicRequest request) {
        this.request = request;
        return this;
    }
}