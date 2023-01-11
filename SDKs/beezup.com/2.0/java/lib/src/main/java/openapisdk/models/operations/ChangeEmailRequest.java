package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeEmailRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChangeEmailRequest request;
    public ChangeEmailRequest withRequest(openapisdk.models.shared.ChangeEmailRequest request) {
        this.request = request;
        return this;
    }
}