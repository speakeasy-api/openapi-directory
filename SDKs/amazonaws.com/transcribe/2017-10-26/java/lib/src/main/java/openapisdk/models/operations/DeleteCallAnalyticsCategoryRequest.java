package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCallAnalyticsCategoryRequest {
    public DeleteCallAnalyticsCategoryHeaders headers;
    public DeleteCallAnalyticsCategoryRequest withHeaders(DeleteCallAnalyticsCategoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCallAnalyticsCategoryRequest request;
    public DeleteCallAnalyticsCategoryRequest withRequest(openapisdk.models.shared.DeleteCallAnalyticsCategoryRequest request) {
        this.request = request;
        return this;
    }
}