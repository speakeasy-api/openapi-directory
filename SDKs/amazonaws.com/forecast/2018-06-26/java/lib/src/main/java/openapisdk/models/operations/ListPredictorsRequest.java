package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPredictorsRequest {
    public ListPredictorsQueryParams queryParams;
    public ListPredictorsRequest withQueryParams(ListPredictorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPredictorsHeaders headers;
    public ListPredictorsRequest withHeaders(ListPredictorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPredictorsRequest request;
    public ListPredictorsRequest withRequest(openapisdk.models.shared.ListPredictorsRequest request) {
        this.request = request;
        return this;
    }
}