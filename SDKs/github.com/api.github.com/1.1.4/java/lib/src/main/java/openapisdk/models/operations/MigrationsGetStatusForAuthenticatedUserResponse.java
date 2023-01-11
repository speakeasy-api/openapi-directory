package openapisdk.models.operations;



public class MigrationsGetStatusForAuthenticatedUserResponse {
    public String contentType;
    public MigrationsGetStatusForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsGetStatusForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public MigrationsGetStatusForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Migration migration;
    public MigrationsGetStatusForAuthenticatedUserResponse withMigration(openapisdk.models.shared.Migration migration) {
        this.migration = migration;
        return this;
    }
}