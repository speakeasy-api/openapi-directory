package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrailStatusRequest {
    public GetTrailStatusHeaders headers;
    public GetTrailStatusRequest withHeaders(GetTrailStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTrailStatusRequest request;
    public GetTrailStatusRequest withRequest(openapisdk.models.shared.GetTrailStatusRequest request) {
        this.request = request;
        return this;
    }
}