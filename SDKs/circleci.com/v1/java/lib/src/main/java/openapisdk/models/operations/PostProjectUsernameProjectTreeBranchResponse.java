package openapisdk.models.operations;



public class PostProjectUsernameProjectTreeBranchResponse {
    public openapisdk.models.shared.Build build;
    public PostProjectUsernameProjectTreeBranchResponse withBuild(openapisdk.models.shared.Build build) {
        this.build = build;
        return this;
    }
    public String contentType;
    public PostProjectUsernameProjectTreeBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostProjectUsernameProjectTreeBranchResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostProjectUsernameProjectTreeBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}