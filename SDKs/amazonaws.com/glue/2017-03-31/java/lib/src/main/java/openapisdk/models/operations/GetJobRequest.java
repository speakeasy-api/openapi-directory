package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobRequest {
    public GetJobHeaders headers;
    public GetJobRequest withHeaders(GetJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetJobRequest request;
    public GetJobRequest withRequest(openapisdk.models.shared.GetJobRequest request) {
        this.request = request;
        return this;
    }
}