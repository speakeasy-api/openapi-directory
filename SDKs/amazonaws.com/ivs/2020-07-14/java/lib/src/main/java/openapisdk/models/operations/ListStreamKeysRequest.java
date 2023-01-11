package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStreamKeysRequest {
    public ListStreamKeysQueryParams queryParams;
    public ListStreamKeysRequest withQueryParams(ListStreamKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStreamKeysHeaders headers;
    public ListStreamKeysRequest withHeaders(ListStreamKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListStreamKeysRequestBody request;
    public ListStreamKeysRequest withRequest(ListStreamKeysRequestBody request) {
        this.request = request;
        return this;
    }
}