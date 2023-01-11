package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterStreamConsumerRequest {
    public RegisterStreamConsumerHeaders headers;
    public RegisterStreamConsumerRequest withHeaders(RegisterStreamConsumerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterStreamConsumerInput request;
    public RegisterStreamConsumerRequest withRequest(openapisdk.models.shared.RegisterStreamConsumerInput request) {
        this.request = request;
        return this;
    }
}