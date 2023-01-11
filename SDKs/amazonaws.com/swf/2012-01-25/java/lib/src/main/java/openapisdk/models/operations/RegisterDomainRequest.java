package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterDomainRequest {
    public RegisterDomainHeaders headers;
    public RegisterDomainRequest withHeaders(RegisterDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterDomainInput request;
    public RegisterDomainRequest withRequest(openapisdk.models.shared.RegisterDomainInput request) {
        this.request = request;
        return this;
    }
}