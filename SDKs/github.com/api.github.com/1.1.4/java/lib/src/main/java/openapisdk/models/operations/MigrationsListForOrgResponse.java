package openapisdk.models.operations;



public class MigrationsListForOrgResponse {
    public String contentType;
    public MigrationsListForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public MigrationsListForOrgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public MigrationsListForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Migration[] migrations;
    public MigrationsListForOrgResponse withMigrations(openapisdk.models.shared.Migration[] migrations) {
        this.migrations = migrations;
        return this;
    }
}