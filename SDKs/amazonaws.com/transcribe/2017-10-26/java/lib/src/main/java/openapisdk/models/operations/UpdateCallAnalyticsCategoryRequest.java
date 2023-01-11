package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCallAnalyticsCategoryRequest {
    public UpdateCallAnalyticsCategoryHeaders headers;
    public UpdateCallAnalyticsCategoryRequest withHeaders(UpdateCallAnalyticsCategoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCallAnalyticsCategoryRequest request;
    public UpdateCallAnalyticsCategoryRequest withRequest(openapisdk.models.shared.UpdateCallAnalyticsCategoryRequest request) {
        this.request = request;
        return this;
    }
}