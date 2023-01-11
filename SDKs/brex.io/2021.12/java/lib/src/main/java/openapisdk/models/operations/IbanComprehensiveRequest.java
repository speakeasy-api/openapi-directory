package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IbanComprehensiveRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public IbanComprehensiveRequestBody request;
    public IbanComprehensiveRequest withRequest(IbanComprehensiveRequestBody request) {
        this.request = request;
        return this;
    }
    public IbanComprehensiveSecurity security;
    public IbanComprehensiveRequest withSecurity(IbanComprehensiveSecurity security) {
        this.security = security;
        return this;
    }
}