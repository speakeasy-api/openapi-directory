package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamProcessorRequest {
    public CreateStreamProcessorHeaders headers;
    public CreateStreamProcessorRequest withHeaders(CreateStreamProcessorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateStreamProcessorRequest request;
    public CreateStreamProcessorRequest withRequest(openapisdk.models.shared.CreateStreamProcessorRequest request) {
        this.request = request;
        return this;
    }
}