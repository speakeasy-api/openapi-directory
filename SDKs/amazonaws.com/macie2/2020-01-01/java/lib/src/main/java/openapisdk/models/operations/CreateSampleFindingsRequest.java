package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSampleFindingsRequest {
    public CreateSampleFindingsHeaders headers;
    public CreateSampleFindingsRequest withHeaders(CreateSampleFindingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSampleFindingsRequestBody request;
    public CreateSampleFindingsRequest withRequest(CreateSampleFindingsRequestBody request) {
        this.request = request;
        return this;
    }
}