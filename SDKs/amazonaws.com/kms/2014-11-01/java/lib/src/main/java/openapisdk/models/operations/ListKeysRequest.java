package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListKeysRequest {
    public ListKeysQueryParams queryParams;
    public ListKeysRequest withQueryParams(ListKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListKeysHeaders headers;
    public ListKeysRequest withHeaders(ListKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListKeysRequest request;
    public ListKeysRequest withRequest(openapisdk.models.shared.ListKeysRequest request) {
        this.request = request;
        return this;
    }
}