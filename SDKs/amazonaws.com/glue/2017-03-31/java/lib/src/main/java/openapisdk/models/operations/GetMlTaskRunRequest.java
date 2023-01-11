package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMlTaskRunRequest {
    public GetMlTaskRunHeaders headers;
    public GetMlTaskRunRequest withHeaders(GetMlTaskRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMlTaskRunRequest request;
    public GetMlTaskRunRequest withRequest(openapisdk.models.shared.GetMlTaskRunRequest request) {
        this.request = request;
        return this;
    }
}