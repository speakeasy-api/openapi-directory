package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebhooksRequest {
    public ListWebhooksQueryParams queryParams;
    public ListWebhooksRequest withQueryParams(ListWebhooksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWebhooksHeaders headers;
    public ListWebhooksRequest withHeaders(ListWebhooksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListWebhooksInput request;
    public ListWebhooksRequest withRequest(openapisdk.models.shared.ListWebhooksInput request) {
        this.request = request;
        return this;
    }
}