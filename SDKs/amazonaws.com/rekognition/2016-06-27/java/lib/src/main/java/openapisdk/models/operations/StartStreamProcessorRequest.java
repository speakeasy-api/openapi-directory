package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartStreamProcessorRequest {
    public StartStreamProcessorHeaders headers;
    public StartStreamProcessorRequest withHeaders(StartStreamProcessorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartStreamProcessorRequest request;
    public StartStreamProcessorRequest withRequest(openapisdk.models.shared.StartStreamProcessorRequest request) {
        this.request = request;
        return this;
    }
}