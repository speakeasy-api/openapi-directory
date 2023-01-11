package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFiltersRequest {
    public ListFiltersQueryParams queryParams;
    public ListFiltersRequest withQueryParams(ListFiltersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFiltersHeaders headers;
    public ListFiltersRequest withHeaders(ListFiltersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFiltersRequest request;
    public ListFiltersRequest withRequest(openapisdk.models.shared.ListFiltersRequest request) {
        this.request = request;
        return this;
    }
}