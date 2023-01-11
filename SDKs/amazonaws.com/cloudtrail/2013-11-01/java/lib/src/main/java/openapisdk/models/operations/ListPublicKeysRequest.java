package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPublicKeysRequest {
    public ListPublicKeysQueryParams queryParams;
    public ListPublicKeysRequest withQueryParams(ListPublicKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPublicKeysHeaders headers;
    public ListPublicKeysRequest withHeaders(ListPublicKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPublicKeysRequest request;
    public ListPublicKeysRequest withRequest(openapisdk.models.shared.ListPublicKeysRequest request) {
        this.request = request;
        return this;
    }
}