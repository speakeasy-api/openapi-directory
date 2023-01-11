package openapisdk.models.operations;



public class MigrationsStartForOrgResponse {
    public String contentType;
    public MigrationsStartForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsStartForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public MigrationsStartForOrgResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Migration migration;
    public MigrationsStartForOrgResponse withMigration(openapisdk.models.shared.Migration migration) {
        this.migration = migration;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public MigrationsStartForOrgResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}