package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomDataIdentifiersRequest {
    public ListCustomDataIdentifiersQueryParams queryParams;
    public ListCustomDataIdentifiersRequest withQueryParams(ListCustomDataIdentifiersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomDataIdentifiersHeaders headers;
    public ListCustomDataIdentifiersRequest withHeaders(ListCustomDataIdentifiersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListCustomDataIdentifiersRequestBody request;
    public ListCustomDataIdentifiersRequest withRequest(ListCustomDataIdentifiersRequestBody request) {
        this.request = request;
        return this;
    }
}