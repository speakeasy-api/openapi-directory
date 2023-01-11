package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrailsRequest {
    public ListTrailsQueryParams queryParams;
    public ListTrailsRequest withQueryParams(ListTrailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTrailsHeaders headers;
    public ListTrailsRequest withHeaders(ListTrailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTrailsRequest request;
    public ListTrailsRequest withRequest(openapisdk.models.shared.ListTrailsRequest request) {
        this.request = request;
        return this;
    }
}