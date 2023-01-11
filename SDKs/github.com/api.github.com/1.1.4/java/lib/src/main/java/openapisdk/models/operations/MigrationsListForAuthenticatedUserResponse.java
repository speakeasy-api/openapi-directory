package openapisdk.models.operations;



public class MigrationsListForAuthenticatedUserResponse {
    public String contentType;
    public MigrationsListForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public MigrationsListForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public MigrationsListForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public MigrationsListForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Migration[] migrations;
    public MigrationsListForAuthenticatedUserResponse withMigrations(openapisdk.models.shared.Migration[] migrations) {
        this.migrations = migrations;
        return this;
    }
}