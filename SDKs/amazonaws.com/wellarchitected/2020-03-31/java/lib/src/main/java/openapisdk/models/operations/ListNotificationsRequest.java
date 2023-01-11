package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNotificationsRequest {
    public ListNotificationsQueryParams queryParams;
    public ListNotificationsRequest withQueryParams(ListNotificationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListNotificationsHeaders headers;
    public ListNotificationsRequest withHeaders(ListNotificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListNotificationsRequestBody request;
    public ListNotificationsRequest withRequest(ListNotificationsRequestBody request) {
        this.request = request;
        return this;
    }
}