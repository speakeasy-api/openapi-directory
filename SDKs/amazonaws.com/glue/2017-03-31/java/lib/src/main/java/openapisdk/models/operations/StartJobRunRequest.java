package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartJobRunRequest {
    public StartJobRunHeaders headers;
    public StartJobRunRequest withHeaders(StartJobRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartJobRunRequest request;
    public StartJobRunRequest withRequest(openapisdk.models.shared.StartJobRunRequest request) {
        this.request = request;
        return this;
    }
}