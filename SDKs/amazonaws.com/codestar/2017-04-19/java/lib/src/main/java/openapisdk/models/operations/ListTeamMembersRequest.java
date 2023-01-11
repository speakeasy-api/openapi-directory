package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTeamMembersRequest {
    public ListTeamMembersHeaders headers;
    public ListTeamMembersRequest withHeaders(ListTeamMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTeamMembersRequest request;
    public ListTeamMembersRequest withRequest(openapisdk.models.shared.ListTeamMembersRequest request) {
        this.request = request;
        return this;
    }
}