package openapisdk.models.operations;



public class TeamsGetMembershipForUserLegacyResponse {
    public String contentType;
    public TeamsGetMembershipForUserLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsGetMembershipForUserLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsGetMembershipForUserLegacyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.TeamMembership teamMembership;
    public TeamsGetMembershipForUserLegacyResponse withTeamMembership(openapisdk.models.shared.TeamMembership teamMembership) {
        this.teamMembership = teamMembership;
        return this;
    }
}