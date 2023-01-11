package openapisdk.models.operations;



public class GitListMatchingRefsResponse {
    public String contentType;
    public GitListMatchingRefsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GitListMatchingRefsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GitListMatchingRefsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GitRef[] gitRefs;
    public GitListMatchingRefsResponse withGitRefs(openapisdk.models.shared.GitRef[] gitRefs) {
        this.gitRefs = gitRefs;
        return this;
    }
}