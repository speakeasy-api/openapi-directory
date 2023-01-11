package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListComponentsRequest {
    public ListComponentsQueryParams queryParams;
    public ListComponentsRequest withQueryParams(ListComponentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListComponentsHeaders headers;
    public ListComponentsRequest withHeaders(ListComponentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListComponentsRequest request;
    public ListComponentsRequest withRequest(openapisdk.models.shared.ListComponentsRequest request) {
        this.request = request;
        return this;
    }
}