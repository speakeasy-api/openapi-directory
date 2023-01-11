package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPersonTrackingRequest {
    public GetPersonTrackingQueryParams queryParams;
    public GetPersonTrackingRequest withQueryParams(GetPersonTrackingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPersonTrackingHeaders headers;
    public GetPersonTrackingRequest withHeaders(GetPersonTrackingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPersonTrackingRequest request;
    public GetPersonTrackingRequest withRequest(openapisdk.models.shared.GetPersonTrackingRequest request) {
        this.request = request;
        return this;
    }
}