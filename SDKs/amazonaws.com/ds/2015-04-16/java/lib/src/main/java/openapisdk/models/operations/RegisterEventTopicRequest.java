package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterEventTopicRequest {
    public RegisterEventTopicHeaders headers;
    public RegisterEventTopicRequest withHeaders(RegisterEventTopicHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterEventTopicRequest request;
    public RegisterEventTopicRequest withRequest(openapisdk.models.shared.RegisterEventTopicRequest request) {
        this.request = request;
        return this;
    }
}