package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SelectAggregateResourceConfigRequest {
    public SelectAggregateResourceConfigQueryParams queryParams;
    public SelectAggregateResourceConfigRequest withQueryParams(SelectAggregateResourceConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SelectAggregateResourceConfigHeaders headers;
    public SelectAggregateResourceConfigRequest withHeaders(SelectAggregateResourceConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SelectAggregateResourceConfigRequest request;
    public SelectAggregateResourceConfigRequest withRequest(openapisdk.models.shared.SelectAggregateResourceConfigRequest request) {
        this.request = request;
        return this;
    }
}