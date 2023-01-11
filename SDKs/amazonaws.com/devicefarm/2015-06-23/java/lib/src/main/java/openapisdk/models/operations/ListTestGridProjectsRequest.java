package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTestGridProjectsRequest {
    public ListTestGridProjectsQueryParams queryParams;
    public ListTestGridProjectsRequest withQueryParams(ListTestGridProjectsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTestGridProjectsHeaders headers;
    public ListTestGridProjectsRequest withHeaders(ListTestGridProjectsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTestGridProjectsRequest request;
    public ListTestGridProjectsRequest withRequest(openapisdk.models.shared.ListTestGridProjectsRequest request) {
        this.request = request;
        return this;
    }
}