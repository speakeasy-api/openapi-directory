package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePortalRequest {
    public UpdatePortalPathParams pathParams;
    public UpdatePortalRequest withPathParams(UpdatePortalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePortalHeaders headers;
    public UpdatePortalRequest withHeaders(UpdatePortalHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePortalRequestBody request;
    public UpdatePortalRequest withRequest(UpdatePortalRequestBody request) {
        this.request = request;
        return this;
    }
}