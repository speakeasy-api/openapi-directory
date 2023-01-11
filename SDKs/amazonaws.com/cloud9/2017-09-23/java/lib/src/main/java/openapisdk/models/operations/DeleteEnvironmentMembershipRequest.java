package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEnvironmentMembershipRequest {
    public DeleteEnvironmentMembershipHeaders headers;
    public DeleteEnvironmentMembershipRequest withHeaders(DeleteEnvironmentMembershipHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEnvironmentMembershipRequest request;
    public DeleteEnvironmentMembershipRequest withRequest(openapisdk.models.shared.DeleteEnvironmentMembershipRequest request) {
        this.request = request;
        return this;
    }
}