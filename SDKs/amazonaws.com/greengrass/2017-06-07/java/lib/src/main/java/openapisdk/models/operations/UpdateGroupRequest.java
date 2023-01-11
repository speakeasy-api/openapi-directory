package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupRequest {
    public UpdateGroupPathParams pathParams;
    public UpdateGroupRequest withPathParams(UpdateGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateGroupHeaders headers;
    public UpdateGroupRequest withHeaders(UpdateGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateGroupRequestBody request;
    public UpdateGroupRequest withRequest(UpdateGroupRequestBody request) {
        this.request = request;
        return this;
    }
}