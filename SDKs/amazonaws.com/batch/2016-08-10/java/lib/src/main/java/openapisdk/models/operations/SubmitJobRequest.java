package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitJobRequest {
    public SubmitJobHeaders headers;
    public SubmitJobRequest withHeaders(SubmitJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SubmitJobRequestBody request;
    public SubmitJobRequest withRequest(SubmitJobRequestBody request) {
        this.request = request;
        return this;
    }
}