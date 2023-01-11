package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConfigurationAggregatorRequest {
    public DeleteConfigurationAggregatorHeaders headers;
    public DeleteConfigurationAggregatorRequest withHeaders(DeleteConfigurationAggregatorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteConfigurationAggregatorRequest request;
    public DeleteConfigurationAggregatorRequest withRequest(openapisdk.models.shared.DeleteConfigurationAggregatorRequest request) {
        this.request = request;
        return this;
    }
}