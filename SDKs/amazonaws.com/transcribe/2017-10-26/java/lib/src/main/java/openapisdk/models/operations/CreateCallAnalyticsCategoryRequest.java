package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallAnalyticsCategoryRequest {
    public CreateCallAnalyticsCategoryHeaders headers;
    public CreateCallAnalyticsCategoryRequest withHeaders(CreateCallAnalyticsCategoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCallAnalyticsCategoryRequest request;
    public CreateCallAnalyticsCategoryRequest withRequest(openapisdk.models.shared.CreateCallAnalyticsCategoryRequest request) {
        this.request = request;
        return this;
    }
}