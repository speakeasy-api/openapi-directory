package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCallAnalyticsCategoriesRequest {
    public ListCallAnalyticsCategoriesQueryParams queryParams;
    public ListCallAnalyticsCategoriesRequest withQueryParams(ListCallAnalyticsCategoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCallAnalyticsCategoriesHeaders headers;
    public ListCallAnalyticsCategoriesRequest withHeaders(ListCallAnalyticsCategoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCallAnalyticsCategoriesRequest request;
    public ListCallAnalyticsCategoriesRequest withRequest(openapisdk.models.shared.ListCallAnalyticsCategoriesRequest request) {
        this.request = request;
        return this;
    }
}