package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInferenceSchedulersRequest {
    public ListInferenceSchedulersQueryParams queryParams;
    public ListInferenceSchedulersRequest withQueryParams(ListInferenceSchedulersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInferenceSchedulersHeaders headers;
    public ListInferenceSchedulersRequest withHeaders(ListInferenceSchedulersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListInferenceSchedulersRequest request;
    public ListInferenceSchedulersRequest withRequest(openapisdk.models.shared.ListInferenceSchedulersRequest request) {
        this.request = request;
        return this;
    }
}