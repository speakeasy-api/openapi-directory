package openapisdk.models.operations;



public class TeamsCreateMembershipResponse {
    public String contentType;
    public TeamsCreateMembershipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCreateMembershipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Membership membership;
    public TeamsCreateMembershipResponse withMembership(openapisdk.models.shared.Membership membership) {
        this.membership = membership;
        return this;
    }
}