package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventSubscriptionsRequest {
    public ListEventSubscriptionsQueryParams queryParams;
    public ListEventSubscriptionsRequest withQueryParams(ListEventSubscriptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEventSubscriptionsHeaders headers;
    public ListEventSubscriptionsRequest withHeaders(ListEventSubscriptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEventSubscriptionsRequest request;
    public ListEventSubscriptionsRequest withRequest(openapisdk.models.shared.ListEventSubscriptionsRequest request) {
        this.request = request;
        return this;
    }
}