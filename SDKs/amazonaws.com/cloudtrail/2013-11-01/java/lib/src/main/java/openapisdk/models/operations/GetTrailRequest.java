package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrailRequest {
    public GetTrailHeaders headers;
    public GetTrailRequest withHeaders(GetTrailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTrailRequest request;
    public GetTrailRequest withRequest(openapisdk.models.shared.GetTrailRequest request) {
        this.request = request;
        return this;
    }
}