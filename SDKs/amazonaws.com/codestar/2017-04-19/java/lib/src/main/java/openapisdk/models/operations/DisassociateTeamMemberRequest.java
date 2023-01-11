package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateTeamMemberRequest {
    public DisassociateTeamMemberHeaders headers;
    public DisassociateTeamMemberRequest withHeaders(DisassociateTeamMemberHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateTeamMemberRequest request;
    public DisassociateTeamMemberRequest withRequest(openapisdk.models.shared.DisassociateTeamMemberRequest request) {
        this.request = request;
        return this;
    }
}