package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ResetRequestBody request;
    public ResetRequest withRequest(ResetRequestBody request) {
        this.request = request;
        return this;
    }
}