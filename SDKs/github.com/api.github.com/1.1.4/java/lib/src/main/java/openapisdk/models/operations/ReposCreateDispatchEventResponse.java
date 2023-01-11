package openapisdk.models.operations;



public class ReposCreateDispatchEventResponse {
    public String contentType;
    public ReposCreateDispatchEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposCreateDispatchEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreateDispatchEventResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}