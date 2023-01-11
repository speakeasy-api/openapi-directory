package openapisdk.models.operations;



public class MigrationsGetImportStatusResponse {
    public String contentType;
    public MigrationsGetImportStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsGetImportStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public MigrationsGetImportStatusResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Import import_;
    public MigrationsGetImportStatusResponse withImport(openapisdk.models.shared.Import import_) {
        this.import_ = import_;
        return this;
    }
}