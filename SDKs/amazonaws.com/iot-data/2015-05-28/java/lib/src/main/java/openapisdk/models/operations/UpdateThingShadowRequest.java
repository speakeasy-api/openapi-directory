package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateThingShadowRequest {
    public UpdateThingShadowPathParams pathParams;
    public UpdateThingShadowRequest withPathParams(UpdateThingShadowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateThingShadowQueryParams queryParams;
    public UpdateThingShadowRequest withQueryParams(UpdateThingShadowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateThingShadowHeaders headers;
    public UpdateThingShadowRequest withHeaders(UpdateThingShadowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateThingShadowRequestBody request;
    public UpdateThingShadowRequest withRequest(UpdateThingShadowRequestBody request) {
        this.request = request;
        return this;
    }
}