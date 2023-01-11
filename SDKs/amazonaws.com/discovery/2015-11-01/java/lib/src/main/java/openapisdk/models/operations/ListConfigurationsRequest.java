package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConfigurationsRequest {
    public ListConfigurationsHeaders headers;
    public ListConfigurationsRequest withHeaders(ListConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListConfigurationsRequest request;
    public ListConfigurationsRequest withRequest(openapisdk.models.shared.ListConfigurationsRequest request) {
        this.request = request;
        return this;
    }
}