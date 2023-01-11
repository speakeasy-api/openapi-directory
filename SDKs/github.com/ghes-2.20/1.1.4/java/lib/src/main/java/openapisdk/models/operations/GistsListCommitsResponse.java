package openapisdk.models.operations;



public class GistsListCommitsResponse {
    public String contentType;
    public GistsListCommitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GistsListCommitsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GistsListCommitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsListCommitsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GistCommit[] gistCommits;
    public GistsListCommitsResponse withGistCommits(openapisdk.models.shared.GistCommit[] gistCommits) {
        this.gistCommits = gistCommits;
        return this;
    }
}