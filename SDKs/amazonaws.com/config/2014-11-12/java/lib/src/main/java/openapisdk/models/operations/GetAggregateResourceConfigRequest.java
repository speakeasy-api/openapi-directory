package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAggregateResourceConfigRequest {
    public GetAggregateResourceConfigHeaders headers;
    public GetAggregateResourceConfigRequest withHeaders(GetAggregateResourceConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAggregateResourceConfigRequest request;
    public GetAggregateResourceConfigRequest withRequest(openapisdk.models.shared.GetAggregateResourceConfigRequest request) {
        this.request = request;
        return this;
    }
}