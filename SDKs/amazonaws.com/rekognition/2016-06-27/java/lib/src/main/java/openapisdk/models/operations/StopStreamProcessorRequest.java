package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopStreamProcessorRequest {
    public StopStreamProcessorHeaders headers;
    public StopStreamProcessorRequest withHeaders(StopStreamProcessorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopStreamProcessorRequest request;
    public StopStreamProcessorRequest withRequest(openapisdk.models.shared.StopStreamProcessorRequest request) {
        this.request = request;
        return this;
    }
}