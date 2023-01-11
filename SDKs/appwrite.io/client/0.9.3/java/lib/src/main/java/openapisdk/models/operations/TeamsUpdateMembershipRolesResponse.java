package openapisdk.models.operations;



public class TeamsUpdateMembershipRolesResponse {
    public String contentType;
    public TeamsUpdateMembershipRolesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsUpdateMembershipRolesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Membership membership;
    public TeamsUpdateMembershipRolesResponse withMembership(openapisdk.models.shared.Membership membership) {
        this.membership = membership;
        return this;
    }
}