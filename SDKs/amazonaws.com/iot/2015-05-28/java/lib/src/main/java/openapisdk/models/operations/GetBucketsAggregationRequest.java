package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBucketsAggregationRequest {
    public GetBucketsAggregationHeaders headers;
    public GetBucketsAggregationRequest withHeaders(GetBucketsAggregationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetBucketsAggregationRequestBody request;
    public GetBucketsAggregationRequest withRequest(GetBucketsAggregationRequestBody request) {
        this.request = request;
        return this;
    }
}