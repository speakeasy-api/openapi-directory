package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelWorldGenerationJobRequest {
    public CancelWorldGenerationJobHeaders headers;
    public CancelWorldGenerationJobRequest withHeaders(CancelWorldGenerationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CancelWorldGenerationJobRequestBody request;
    public CancelWorldGenerationJobRequest withRequest(CancelWorldGenerationJobRequestBody request) {
        this.request = request;
        return this;
    }
}