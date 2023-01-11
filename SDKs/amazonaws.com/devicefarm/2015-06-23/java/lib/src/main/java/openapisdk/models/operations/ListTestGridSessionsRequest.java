package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTestGridSessionsRequest {
    public ListTestGridSessionsQueryParams queryParams;
    public ListTestGridSessionsRequest withQueryParams(ListTestGridSessionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTestGridSessionsHeaders headers;
    public ListTestGridSessionsRequest withHeaders(ListTestGridSessionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTestGridSessionsRequest request;
    public ListTestGridSessionsRequest withRequest(openapisdk.models.shared.ListTestGridSessionsRequest request) {
        this.request = request;
        return this;
    }
}