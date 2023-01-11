package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostChargeRequest {
    public PostChargePathParams pathParams;
    public PostChargeRequest withPathParams(PostChargePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostChargeRequestBody request;
    public PostChargeRequest withRequest(PostChargeRequestBody request) {
        this.request = request;
        return this;
    }
}