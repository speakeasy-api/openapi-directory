package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMissionProfileRequest {
    public CreateMissionProfileHeaders headers;
    public CreateMissionProfileRequest withHeaders(CreateMissionProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMissionProfileRequestBody request;
    public CreateMissionProfileRequest withRequest(CreateMissionProfileRequestBody request) {
        this.request = request;
        return this;
    }
}