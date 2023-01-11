package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentMembershipRequest {
    public CreateEnvironmentMembershipHeaders headers;
    public CreateEnvironmentMembershipRequest withHeaders(CreateEnvironmentMembershipHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEnvironmentMembershipRequest request;
    public CreateEnvironmentMembershipRequest withRequest(openapisdk.models.shared.CreateEnvironmentMembershipRequest request) {
        this.request = request;
        return this;
    }
}