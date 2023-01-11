package openapisdk.models.operations;



public class GetWorkspacesWorkspaceMembersMemberResponse {
    public String contentType;
    public GetWorkspacesWorkspaceMembersMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesWorkspaceMembersMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesWorkspaceMembersMemberResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> workspaceMembership;
    public GetWorkspacesWorkspaceMembersMemberResponse withWorkspaceMembership(java.util.Map<String, Object> workspaceMembership) {
        this.workspaceMembership = workspaceMembership;
        return this;
    }
}