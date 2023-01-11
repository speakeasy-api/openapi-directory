package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobInfoRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JobIdRequestBody request;
    public GetJobInfoRequest withRequest(openapisdk.models.shared.JobIdRequestBody request) {
        this.request = request;
        return this;
    }
}