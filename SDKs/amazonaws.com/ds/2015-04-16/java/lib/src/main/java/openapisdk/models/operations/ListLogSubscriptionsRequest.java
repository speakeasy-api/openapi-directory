package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLogSubscriptionsRequest {
    public ListLogSubscriptionsHeaders headers;
    public ListLogSubscriptionsRequest withHeaders(ListLogSubscriptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLogSubscriptionsRequest request;
    public ListLogSubscriptionsRequest withRequest(openapisdk.models.shared.ListLogSubscriptionsRequest request) {
        this.request = request;
        return this;
    }
}