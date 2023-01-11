package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNodegroupVersionRequest {
    public UpdateNodegroupVersionPathParams pathParams;
    public UpdateNodegroupVersionRequest withPathParams(UpdateNodegroupVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateNodegroupVersionHeaders headers;
    public UpdateNodegroupVersionRequest withHeaders(UpdateNodegroupVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNodegroupVersionRequestBody request;
    public UpdateNodegroupVersionRequest withRequest(UpdateNodegroupVersionRequestBody request) {
        this.request = request;
        return this;
    }
}