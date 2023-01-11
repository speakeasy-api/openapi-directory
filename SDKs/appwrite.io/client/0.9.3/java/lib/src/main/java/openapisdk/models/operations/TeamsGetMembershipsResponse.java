package openapisdk.models.operations;



public class TeamsGetMembershipsResponse {
    public String contentType;
    public TeamsGetMembershipsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsGetMembershipsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MembershipList membershipList;
    public TeamsGetMembershipsResponse withMembershipList(openapisdk.models.shared.MembershipList membershipList) {
        this.membershipList = membershipList;
        return this;
    }
}