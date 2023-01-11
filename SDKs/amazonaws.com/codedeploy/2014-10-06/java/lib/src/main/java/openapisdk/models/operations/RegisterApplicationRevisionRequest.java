package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterApplicationRevisionRequest {
    public RegisterApplicationRevisionHeaders headers;
    public RegisterApplicationRevisionRequest withHeaders(RegisterApplicationRevisionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterApplicationRevisionInput request;
    public RegisterApplicationRevisionRequest withRequest(openapisdk.models.shared.RegisterApplicationRevisionInput request) {
        this.request = request;
        return this;
    }
}