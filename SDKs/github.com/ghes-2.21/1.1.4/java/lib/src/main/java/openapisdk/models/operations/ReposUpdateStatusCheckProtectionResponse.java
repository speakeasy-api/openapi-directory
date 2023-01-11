package openapisdk.models.operations;



public class ReposUpdateStatusCheckProtectionResponse {
    public String contentType;
    public ReposUpdateStatusCheckProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUpdateStatusCheckProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposUpdateStatusCheckProtectionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.StatusCheckPolicy statusCheckPolicy;
    public ReposUpdateStatusCheckProtectionResponse withStatusCheckPolicy(openapisdk.models.shared.StatusCheckPolicy statusCheckPolicy) {
        this.statusCheckPolicy = statusCheckPolicy;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposUpdateStatusCheckProtectionResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}