package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobUnlockCodeRequest {
    public GetJobUnlockCodeHeaders headers;
    public GetJobUnlockCodeRequest withHeaders(GetJobUnlockCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetJobUnlockCodeRequest request;
    public GetJobUnlockCodeRequest withRequest(openapisdk.models.shared.GetJobUnlockCodeRequest request) {
        this.request = request;
        return this;
    }
}