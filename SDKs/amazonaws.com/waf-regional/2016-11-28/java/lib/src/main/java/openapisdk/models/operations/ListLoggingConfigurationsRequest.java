package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLoggingConfigurationsRequest {
    public ListLoggingConfigurationsHeaders headers;
    public ListLoggingConfigurationsRequest withHeaders(ListLoggingConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLoggingConfigurationsRequest request;
    public ListLoggingConfigurationsRequest withRequest(openapisdk.models.shared.ListLoggingConfigurationsRequest request) {
        this.request = request;
        return this;
    }
}