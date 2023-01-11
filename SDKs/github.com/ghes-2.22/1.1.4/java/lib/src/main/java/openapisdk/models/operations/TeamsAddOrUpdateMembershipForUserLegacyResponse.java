package openapisdk.models.operations;



public class TeamsAddOrUpdateMembershipForUserLegacyResponse {
    public String contentType;
    public TeamsAddOrUpdateMembershipForUserLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsAddOrUpdateMembershipForUserLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsAddOrUpdateMembershipForUserLegacyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.TeamMembership teamMembership;
    public TeamsAddOrUpdateMembershipForUserLegacyResponse withTeamMembership(openapisdk.models.shared.TeamMembership teamMembership) {
        this.teamMembership = teamMembership;
        return this;
    }
}