package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterActivityTypeRequest {
    public RegisterActivityTypeHeaders headers;
    public RegisterActivityTypeRequest withHeaders(RegisterActivityTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterActivityTypeInput request;
    public RegisterActivityTypeRequest withRequest(openapisdk.models.shared.RegisterActivityTypeInput request) {
        this.request = request;
        return this;
    }
}