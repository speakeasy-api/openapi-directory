package openapisdk.models.operations;



public class ReposAddAppAccessRestrictionsResponse {
    public String contentType;
    public ReposAddAppAccessRestrictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposAddAppAccessRestrictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object>[] integrations;
    public ReposAddAppAccessRestrictionsResponse withIntegrations(java.util.Map<String, Object>[] integrations) {
        this.integrations = integrations;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposAddAppAccessRestrictionsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}