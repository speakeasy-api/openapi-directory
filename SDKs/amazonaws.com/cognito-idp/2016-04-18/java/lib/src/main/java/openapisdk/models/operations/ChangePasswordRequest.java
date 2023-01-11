package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangePasswordRequest {
    public ChangePasswordHeaders headers;
    public ChangePasswordRequest withHeaders(ChangePasswordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChangePasswordRequest request;
    public ChangePasswordRequest withRequest(openapisdk.models.shared.ChangePasswordRequest request) {
        this.request = request;
        return this;
    }
}