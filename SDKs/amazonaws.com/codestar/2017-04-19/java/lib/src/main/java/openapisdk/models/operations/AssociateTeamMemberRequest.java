package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateTeamMemberRequest {
    public AssociateTeamMemberHeaders headers;
    public AssociateTeamMemberRequest withHeaders(AssociateTeamMemberHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateTeamMemberRequest request;
    public AssociateTeamMemberRequest withRequest(openapisdk.models.shared.AssociateTeamMemberRequest request) {
        this.request = request;
        return this;
    }
}