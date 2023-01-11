package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCallAnalyticsCategoryRequest {
    public GetCallAnalyticsCategoryHeaders headers;
    public GetCallAnalyticsCategoryRequest withHeaders(GetCallAnalyticsCategoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCallAnalyticsCategoryRequest request;
    public GetCallAnalyticsCategoryRequest withRequest(openapisdk.models.shared.GetCallAnalyticsCategoryRequest request) {
        this.request = request;
        return this;
    }
}