package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBuildRequest {
    public CreateBuildHeaders headers;
    public CreateBuildRequest withHeaders(CreateBuildHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBuildInput request;
    public CreateBuildRequest withRequest(openapisdk.models.shared.CreateBuildInput request) {
        this.request = request;
        return this;
    }
}