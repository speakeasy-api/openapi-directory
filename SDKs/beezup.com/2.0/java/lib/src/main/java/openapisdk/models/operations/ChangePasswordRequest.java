package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangePasswordRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChangePasswordRequest request;
    public ChangePasswordRequest withRequest(openapisdk.models.shared.ChangePasswordRequest request) {
        this.request = request;
        return this;
    }
}