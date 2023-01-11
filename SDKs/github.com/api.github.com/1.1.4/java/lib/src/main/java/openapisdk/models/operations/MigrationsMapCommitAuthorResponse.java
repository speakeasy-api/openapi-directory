package openapisdk.models.operations;



public class MigrationsMapCommitAuthorResponse {
    public String contentType;
    public MigrationsMapCommitAuthorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsMapCommitAuthorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public MigrationsMapCommitAuthorResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PorterAuthor porterAuthor;
    public MigrationsMapCommitAuthorResponse withPorterAuthor(openapisdk.models.shared.PorterAuthor porterAuthor) {
        this.porterAuthor = porterAuthor;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public MigrationsMapCommitAuthorResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}