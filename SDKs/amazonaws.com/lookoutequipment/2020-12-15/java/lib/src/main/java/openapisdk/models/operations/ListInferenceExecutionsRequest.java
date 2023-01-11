package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInferenceExecutionsRequest {
    public ListInferenceExecutionsQueryParams queryParams;
    public ListInferenceExecutionsRequest withQueryParams(ListInferenceExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInferenceExecutionsHeaders headers;
    public ListInferenceExecutionsRequest withHeaders(ListInferenceExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListInferenceExecutionsRequest request;
    public ListInferenceExecutionsRequest withRequest(openapisdk.models.shared.ListInferenceExecutionsRequest request) {
        this.request = request;
        return this;
    }
}