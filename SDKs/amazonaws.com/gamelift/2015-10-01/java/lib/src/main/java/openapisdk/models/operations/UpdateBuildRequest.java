package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBuildRequest {
    public UpdateBuildHeaders headers;
    public UpdateBuildRequest withHeaders(UpdateBuildHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateBuildInput request;
    public UpdateBuildRequest withRequest(openapisdk.models.shared.UpdateBuildInput request) {
        this.request = request;
        return this;
    }
}