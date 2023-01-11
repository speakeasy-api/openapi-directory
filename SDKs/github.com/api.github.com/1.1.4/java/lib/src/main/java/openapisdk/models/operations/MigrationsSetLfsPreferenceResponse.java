package openapisdk.models.operations;



public class MigrationsSetLfsPreferenceResponse {
    public String contentType;
    public MigrationsSetLfsPreferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrationsSetLfsPreferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Import import_;
    public MigrationsSetLfsPreferenceResponse withImport(openapisdk.models.shared.Import import_) {
        this.import_ = import_;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public MigrationsSetLfsPreferenceResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}