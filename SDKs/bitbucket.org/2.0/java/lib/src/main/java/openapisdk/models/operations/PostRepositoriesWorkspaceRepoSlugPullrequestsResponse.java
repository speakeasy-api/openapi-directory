package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugPullrequestsResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pullrequest;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsResponse withPullrequest(java.util.Map<String, Object> pullrequest) {
        this.pullrequest = pullrequest;
        return this;
    }
}