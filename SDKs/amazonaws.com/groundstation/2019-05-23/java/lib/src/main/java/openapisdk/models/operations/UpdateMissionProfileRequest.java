package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMissionProfileRequest {
    public UpdateMissionProfilePathParams pathParams;
    public UpdateMissionProfileRequest withPathParams(UpdateMissionProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateMissionProfileHeaders headers;
    public UpdateMissionProfileRequest withHeaders(UpdateMissionProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateMissionProfileRequestBody request;
    public UpdateMissionProfileRequest withRequest(UpdateMissionProfileRequestBody request) {
        this.request = request;
        return this;
    }
}