package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSolutionsRequest {
    public ListSolutionsQueryParams queryParams;
    public ListSolutionsRequest withQueryParams(ListSolutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSolutionsHeaders headers;
    public ListSolutionsRequest withHeaders(ListSolutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSolutionsRequest request;
    public ListSolutionsRequest withRequest(openapisdk.models.shared.ListSolutionsRequest request) {
        this.request = request;
        return this;
    }
}