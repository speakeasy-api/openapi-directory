package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTeamMemberRequest {
    public UpdateTeamMemberHeaders headers;
    public UpdateTeamMemberRequest withHeaders(UpdateTeamMemberHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTeamMemberRequest request;
    public UpdateTeamMemberRequest withRequest(openapisdk.models.shared.UpdateTeamMemberRequest request) {
        this.request = request;
        return this;
    }
}