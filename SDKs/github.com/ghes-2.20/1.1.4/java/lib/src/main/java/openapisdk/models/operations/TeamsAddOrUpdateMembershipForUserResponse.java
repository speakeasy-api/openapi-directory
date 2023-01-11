package openapisdk.models.operations;



public class TeamsAddOrUpdateMembershipForUserResponse {
    public String contentType;
    public TeamsAddOrUpdateMembershipForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsAddOrUpdateMembershipForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamMembership teamMembership;
    public TeamsAddOrUpdateMembershipForUserResponse withTeamMembership(openapisdk.models.shared.TeamMembership teamMembership) {
        this.teamMembership = teamMembership;
        return this;
    }
}