package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNodegroupConfigRequest {
    public UpdateNodegroupConfigPathParams pathParams;
    public UpdateNodegroupConfigRequest withPathParams(UpdateNodegroupConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateNodegroupConfigHeaders headers;
    public UpdateNodegroupConfigRequest withHeaders(UpdateNodegroupConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNodegroupConfigRequestBody request;
    public UpdateNodegroupConfigRequest withRequest(UpdateNodegroupConfigRequestBody request) {
        this.request = request;
        return this;
    }
}