package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStreamConsumersRequest {
    public ListStreamConsumersQueryParams queryParams;
    public ListStreamConsumersRequest withQueryParams(ListStreamConsumersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStreamConsumersHeaders headers;
    public ListStreamConsumersRequest withHeaders(ListStreamConsumersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListStreamConsumersInput request;
    public ListStreamConsumersRequest withRequest(openapisdk.models.shared.ListStreamConsumersInput request) {
        this.request = request;
        return this;
    }
}