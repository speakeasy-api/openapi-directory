package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListActionTypesRequest {
    public ListActionTypesQueryParams queryParams;
    public ListActionTypesRequest withQueryParams(ListActionTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListActionTypesHeaders headers;
    public ListActionTypesRequest withHeaders(ListActionTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListActionTypesInput request;
    public ListActionTypesRequest withRequest(openapisdk.models.shared.ListActionTypesInput request) {
        this.request = request;
        return this;
    }
}