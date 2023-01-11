package openapisdk.models.operations;



public class TeamsUpdateMembershipStatusResponse {
    public String contentType;
    public TeamsUpdateMembershipStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsUpdateMembershipStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Membership membership;
    public TeamsUpdateMembershipStatusResponse withMembership(openapisdk.models.shared.Membership membership) {
        this.membership = membership;
        return this;
    }
}