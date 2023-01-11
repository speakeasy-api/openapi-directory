package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRunRequest {
    public GetRunHeaders headers;
    public GetRunRequest withHeaders(GetRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRunRequest request;
    public GetRunRequest withRequest(openapisdk.models.shared.GetRunRequest request) {
        this.request = request;
        return this;
    }
}