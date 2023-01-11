package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConfigurationAggregatorRequest {
    public PutConfigurationAggregatorHeaders headers;
    public PutConfigurationAggregatorRequest withHeaders(PutConfigurationAggregatorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutConfigurationAggregatorRequest request;
    public PutConfigurationAggregatorRequest withRequest(openapisdk.models.shared.PutConfigurationAggregatorRequest request) {
        this.request = request;
        return this;
    }
}