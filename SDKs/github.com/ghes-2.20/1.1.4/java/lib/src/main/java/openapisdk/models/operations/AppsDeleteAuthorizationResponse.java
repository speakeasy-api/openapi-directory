package openapisdk.models.operations;



public class AppsDeleteAuthorizationResponse {
    public String contentType;
    public AppsDeleteAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsDeleteAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public AppsDeleteAuthorizationResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}