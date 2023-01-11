package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobRunRequest {
    public GetJobRunHeaders headers;
    public GetJobRunRequest withHeaders(GetJobRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetJobRunRequest request;
    public GetJobRunRequest withRequest(openapisdk.models.shared.GetJobRunRequest request) {
        this.request = request;
        return this;
    }
}