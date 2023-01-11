package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagValuesRequest {
    public GetTagValuesQueryParams queryParams;
    public GetTagValuesRequest withQueryParams(GetTagValuesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTagValuesHeaders headers;
    public GetTagValuesRequest withHeaders(GetTagValuesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTagValuesInput request;
    public GetTagValuesRequest withRequest(openapisdk.models.shared.GetTagValuesInput request) {
        this.request = request;
        return this;
    }
}