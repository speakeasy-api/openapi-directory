package openapisdk.models.operations;



public class MigrationsDownloadArchiveForOrgResponse {
    public String contentType;
    public MigrationsDownloadArchiveForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsDownloadArchiveForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public MigrationsDownloadArchiveForOrgResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}