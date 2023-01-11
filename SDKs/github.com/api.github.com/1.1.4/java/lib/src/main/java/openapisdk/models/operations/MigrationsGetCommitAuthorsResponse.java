package openapisdk.models.operations;



public class MigrationsGetCommitAuthorsResponse {
    public String contentType;
    public MigrationsGetCommitAuthorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsGetCommitAuthorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public MigrationsGetCommitAuthorsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PorterAuthor[] porterAuthors;
    public MigrationsGetCommitAuthorsResponse withPorterAuthors(openapisdk.models.shared.PorterAuthor[] porterAuthors) {
        this.porterAuthors = porterAuthors;
        return this;
    }
}