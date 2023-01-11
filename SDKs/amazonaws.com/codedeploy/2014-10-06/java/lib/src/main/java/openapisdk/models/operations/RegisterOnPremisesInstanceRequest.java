package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterOnPremisesInstanceRequest {
    public RegisterOnPremisesInstanceHeaders headers;
    public RegisterOnPremisesInstanceRequest withHeaders(RegisterOnPremisesInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterOnPremisesInstanceInput request;
    public RegisterOnPremisesInstanceRequest withRequest(openapisdk.models.shared.RegisterOnPremisesInstanceInput request) {
        this.request = request;
        return this;
    }
}