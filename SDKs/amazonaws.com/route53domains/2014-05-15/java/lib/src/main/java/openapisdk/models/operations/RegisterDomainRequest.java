package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterDomainRequest {
    public RegisterDomainHeaders headers;
    public RegisterDomainRequest withHeaders(RegisterDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterDomainRequest request;
    public RegisterDomainRequest withRequest(openapisdk.models.shared.RegisterDomainRequest request) {
        this.request = request;
        return this;
    }
}