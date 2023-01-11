package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDifferencesRequest {
    public GetDifferencesQueryParams queryParams;
    public GetDifferencesRequest withQueryParams(GetDifferencesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDifferencesHeaders headers;
    public GetDifferencesRequest withHeaders(GetDifferencesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDifferencesInput request;
    public GetDifferencesRequest withRequest(openapisdk.models.shared.GetDifferencesInput request) {
        this.request = request;
        return this;
    }
}