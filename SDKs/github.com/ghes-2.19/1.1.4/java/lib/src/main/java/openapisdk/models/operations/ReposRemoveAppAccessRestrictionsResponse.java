package openapisdk.models.operations;



public class ReposRemoveAppAccessRestrictionsResponse {
    public String contentType;
    public ReposRemoveAppAccessRestrictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposRemoveAppAccessRestrictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object>[] integrations;
    public ReposRemoveAppAccessRestrictionsResponse withIntegrations(java.util.Map<String, Object>[] integrations) {
        this.integrations = integrations;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposRemoveAppAccessRestrictionsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}