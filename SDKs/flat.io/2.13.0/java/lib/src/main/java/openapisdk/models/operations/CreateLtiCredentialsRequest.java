package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLtiCredentialsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LtiCredentialsCreation request;
    public CreateLtiCredentialsRequest withRequest(openapisdk.models.shared.LtiCredentialsCreation request) {
        this.request = request;
        return this;
    }
    public CreateLtiCredentialsSecurity security;
    public CreateLtiCredentialsRequest withSecurity(CreateLtiCredentialsSecurity security) {
        this.security = security;
        return this;
    }
}