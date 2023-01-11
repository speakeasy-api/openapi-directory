package openapisdk.models.operations;



public class MigrationsUpdateImportResponse {
    public String contentType;
    public MigrationsUpdateImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsUpdateImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Import import_;
    public MigrationsUpdateImportResponse withImport(openapisdk.models.shared.Import import_) {
        this.import_ = import_;
        return this;
    }
}