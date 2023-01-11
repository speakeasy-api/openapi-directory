package openapisdk.models.operations;



public class MigrationsStartImportResponse {
    public String contentType;
    public MigrationsStartImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public MigrationsStartImportResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public MigrationsStartImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public MigrationsStartImportResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Import import_;
    public MigrationsStartImportResponse withImport(openapisdk.models.shared.Import import_) {
        this.import_ = import_;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public MigrationsStartImportResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}