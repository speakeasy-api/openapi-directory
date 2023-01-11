package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelJobRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JobIdRequestBody request;
    public CancelJobRequest withRequest(openapisdk.models.shared.JobIdRequestBody request) {
        this.request = request;
        return this;
    }
}