package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStreamProcessorRequest {
    public DeleteStreamProcessorHeaders headers;
    public DeleteStreamProcessorRequest withHeaders(DeleteStreamProcessorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteStreamProcessorRequest request;
    public DeleteStreamProcessorRequest withRequest(openapisdk.models.shared.DeleteStreamProcessorRequest request) {
        this.request = request;
        return this;
    }
}