package openapisdk.models.operations;



public class GitGetTagResponse {
    public String contentType;
    public GitGetTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GitGetTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GitGetTagResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GitTag gitTag;
    public GitGetTagResponse withGitTag(openapisdk.models.shared.GitTag gitTag) {
        this.gitTag = gitTag;
        return this;
    }
}