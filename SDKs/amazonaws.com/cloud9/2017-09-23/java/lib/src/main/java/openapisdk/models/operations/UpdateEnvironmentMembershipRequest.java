package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnvironmentMembershipRequest {
    public UpdateEnvironmentMembershipHeaders headers;
    public UpdateEnvironmentMembershipRequest withHeaders(UpdateEnvironmentMembershipHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEnvironmentMembershipRequest request;
    public UpdateEnvironmentMembershipRequest withRequest(openapisdk.models.shared.UpdateEnvironmentMembershipRequest request) {
        this.request = request;
        return this;
    }
}