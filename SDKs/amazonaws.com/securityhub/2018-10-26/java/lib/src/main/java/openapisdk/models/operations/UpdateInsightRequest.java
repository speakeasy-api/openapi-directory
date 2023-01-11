package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInsightRequest {
    public UpdateInsightPathParams pathParams;
    public UpdateInsightRequest withPathParams(UpdateInsightPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateInsightHeaders headers;
    public UpdateInsightRequest withHeaders(UpdateInsightHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateInsightRequestBody request;
    public UpdateInsightRequest withRequest(UpdateInsightRequestBody request) {
        this.request = request;
        return this;
    }
}