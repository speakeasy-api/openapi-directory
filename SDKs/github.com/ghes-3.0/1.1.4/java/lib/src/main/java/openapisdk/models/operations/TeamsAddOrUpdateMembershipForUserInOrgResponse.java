package openapisdk.models.operations;



public class TeamsAddOrUpdateMembershipForUserInOrgResponse {
    public String contentType;
    public TeamsAddOrUpdateMembershipForUserInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsAddOrUpdateMembershipForUserInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamMembership teamMembership;
    public TeamsAddOrUpdateMembershipForUserInOrgResponse withTeamMembership(openapisdk.models.shared.TeamMembership teamMembership) {
        this.teamMembership = teamMembership;
        return this;
    }
}