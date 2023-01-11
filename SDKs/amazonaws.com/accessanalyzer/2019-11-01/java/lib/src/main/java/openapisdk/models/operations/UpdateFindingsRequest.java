package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFindingsRequest {
    public UpdateFindingsHeaders headers;
    public UpdateFindingsRequest withHeaders(UpdateFindingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateFindingsRequestBody request;
    public UpdateFindingsRequest withRequest(UpdateFindingsRequestBody request) {
        this.request = request;
        return this;
    }
}