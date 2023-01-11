package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConfigurationHistoryRequest {
    public ListConfigurationHistoryQueryParams queryParams;
    public ListConfigurationHistoryRequest withQueryParams(ListConfigurationHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConfigurationHistoryHeaders headers;
    public ListConfigurationHistoryRequest withHeaders(ListConfigurationHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListConfigurationHistoryRequest request;
    public ListConfigurationHistoryRequest withRequest(openapisdk.models.shared.ListConfigurationHistoryRequest request) {
        this.request = request;
        return this;
    }
}