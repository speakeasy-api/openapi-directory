package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetUserPasswordRequest {
    public ResetUserPasswordHeaders headers;
    public ResetUserPasswordRequest withHeaders(ResetUserPasswordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResetUserPasswordRequest request;
    public ResetUserPasswordRequest withRequest(openapisdk.models.shared.ResetUserPasswordRequest request) {
        this.request = request;
        return this;
    }
}