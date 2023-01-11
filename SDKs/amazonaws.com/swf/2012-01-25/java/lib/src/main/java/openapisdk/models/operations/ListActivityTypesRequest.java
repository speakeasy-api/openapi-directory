package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListActivityTypesRequest {
    public ListActivityTypesQueryParams queryParams;
    public ListActivityTypesRequest withQueryParams(ListActivityTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListActivityTypesHeaders headers;
    public ListActivityTypesRequest withHeaders(ListActivityTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListActivityTypesInput request;
    public ListActivityTypesRequest withRequest(openapisdk.models.shared.ListActivityTypesInput request) {
        this.request = request;
        return this;
    }
}