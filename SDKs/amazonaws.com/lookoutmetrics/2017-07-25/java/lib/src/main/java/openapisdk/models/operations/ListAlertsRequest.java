package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAlertsRequest {
    public ListAlertsQueryParams queryParams;
    public ListAlertsRequest withQueryParams(ListAlertsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAlertsHeaders headers;
    public ListAlertsRequest withHeaders(ListAlertsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListAlertsRequestBody request;
    public ListAlertsRequest withRequest(ListAlertsRequestBody request) {
        this.request = request;
        return this;
    }
}