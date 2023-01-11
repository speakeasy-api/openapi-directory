package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMemberSessionRequest {
    public UpdateMemberSessionPathParams pathParams;
    public UpdateMemberSessionRequest withPathParams(UpdateMemberSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateMemberSessionHeaders headers;
    public UpdateMemberSessionRequest withHeaders(UpdateMemberSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateMemberSessionRequestBody request;
    public UpdateMemberSessionRequest withRequest(UpdateMemberSessionRequestBody request) {
        this.request = request;
        return this;
    }
}