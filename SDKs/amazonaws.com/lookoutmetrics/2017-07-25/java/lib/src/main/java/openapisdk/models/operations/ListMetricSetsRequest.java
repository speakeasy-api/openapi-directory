package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMetricSetsRequest {
    public ListMetricSetsQueryParams queryParams;
    public ListMetricSetsRequest withQueryParams(ListMetricSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMetricSetsHeaders headers;
    public ListMetricSetsRequest withHeaders(ListMetricSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListMetricSetsRequestBody request;
    public ListMetricSetsRequest withRequest(ListMetricSetsRequestBody request) {
        this.request = request;
        return this;
    }
}