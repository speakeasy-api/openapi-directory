package openapisdk.models.operations;



public class MigrationsGetStatusForOrgResponse {
    public String contentType;
    public MigrationsGetStatusForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsGetStatusForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public MigrationsGetStatusForOrgResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Migration migration;
    public MigrationsGetStatusForOrgResponse withMigration(openapisdk.models.shared.Migration migration) {
        this.migration = migration;
        return this;
    }
}