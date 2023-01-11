package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBotsRequest {
    public ListBotsQueryParams queryParams;
    public ListBotsRequest withQueryParams(ListBotsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBotsHeaders headers;
    public ListBotsRequest withHeaders(ListBotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListBotsRequestBody request;
    public ListBotsRequest withRequest(ListBotsRequestBody request) {
        this.request = request;
        return this;
    }
}