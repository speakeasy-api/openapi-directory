package openapisdk.models.operations;



public class TeamsGetMembershipForUserResponse {
    public String contentType;
    public TeamsGetMembershipForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsGetMembershipForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamMembership teamMembership;
    public TeamsGetMembershipForUserResponse withTeamMembership(openapisdk.models.shared.TeamMembership teamMembership) {
        this.teamMembership = teamMembership;
        return this;
    }
}