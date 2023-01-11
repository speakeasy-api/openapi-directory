package openapisdk.models.operations;



public class CareTeamMembersReadResponse {
    public openapisdk.models.shared.CareTeamMember careTeamMember;
    public CareTeamMembersReadResponse withCareTeamMember(openapisdk.models.shared.CareTeamMember careTeamMember) {
        this.careTeamMember = careTeamMember;
        return this;
    }
    public String contentType;
    public CareTeamMembersReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CareTeamMembersReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}