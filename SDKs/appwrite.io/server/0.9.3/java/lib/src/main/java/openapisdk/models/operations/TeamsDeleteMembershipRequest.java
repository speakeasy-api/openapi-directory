package openapisdk.models.operations;



public class TeamsDeleteMembershipRequest {
    public TeamsDeleteMembershipPathParams pathParams;
    public TeamsDeleteMembershipRequest withPathParams(TeamsDeleteMembershipPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TeamsDeleteMembershipSecurity security;
    public TeamsDeleteMembershipRequest withSecurity(TeamsDeleteMembershipSecurity security) {
        this.security = security;
        return this;
    }
}