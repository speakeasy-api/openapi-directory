package openapisdk.models.operations;



public class MigrationsUnlockRepoForOrgResponse {
    public String contentType;
    public MigrationsUnlockRepoForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsUnlockRepoForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public MigrationsUnlockRepoForOrgResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}