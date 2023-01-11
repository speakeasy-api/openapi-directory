package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStandardsControlRequest {
    public UpdateStandardsControlPathParams pathParams;
    public UpdateStandardsControlRequest withPathParams(UpdateStandardsControlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateStandardsControlHeaders headers;
    public UpdateStandardsControlRequest withHeaders(UpdateStandardsControlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateStandardsControlRequestBody request;
    public UpdateStandardsControlRequest withRequest(UpdateStandardsControlRequestBody request) {
        this.request = request;
        return this;
    }
}