package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTriggersRequest {
    public ListTriggersQueryParams queryParams;
    public ListTriggersRequest withQueryParams(ListTriggersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTriggersHeaders headers;
    public ListTriggersRequest withHeaders(ListTriggersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTriggersRequest request;
    public ListTriggersRequest withRequest(openapisdk.models.shared.ListTriggersRequest request) {
        this.request = request;
        return this;
    }
}