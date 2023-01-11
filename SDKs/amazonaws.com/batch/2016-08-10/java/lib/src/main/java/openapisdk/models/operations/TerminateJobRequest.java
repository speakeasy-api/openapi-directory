package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TerminateJobRequest {
    public TerminateJobHeaders headers;
    public TerminateJobRequest withHeaders(TerminateJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TerminateJobRequestBody request;
    public TerminateJobRequest withRequest(TerminateJobRequestBody request) {
        this.request = request;
        return this;
    }
}