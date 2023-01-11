package openapisdk.models.operations;



public class MigrationsStartForAuthenticatedUserResponse {
    public String contentType;
    public MigrationsStartForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsStartForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public MigrationsStartForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Migration migration;
    public MigrationsStartForAuthenticatedUserResponse withMigration(openapisdk.models.shared.Migration migration) {
        this.migration = migration;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public MigrationsStartForAuthenticatedUserResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}