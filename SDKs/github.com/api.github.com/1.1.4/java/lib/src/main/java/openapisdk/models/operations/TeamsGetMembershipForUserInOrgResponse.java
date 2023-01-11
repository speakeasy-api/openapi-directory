package openapisdk.models.operations;



public class TeamsGetMembershipForUserInOrgResponse {
    public String contentType;
    public TeamsGetMembershipForUserInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsGetMembershipForUserInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamMembership teamMembership;
    public TeamsGetMembershipForUserInOrgResponse withTeamMembership(openapisdk.models.shared.TeamMembership teamMembership) {
        this.teamMembership = teamMembership;
        return this;
    }
}