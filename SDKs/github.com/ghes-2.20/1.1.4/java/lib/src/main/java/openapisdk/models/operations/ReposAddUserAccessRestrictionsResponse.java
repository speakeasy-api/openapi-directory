package openapisdk.models.operations;



public class ReposAddUserAccessRestrictionsResponse {
    public String contentType;
    public ReposAddUserAccessRestrictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposAddUserAccessRestrictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SimpleUser[] simpleUsers;
    public ReposAddUserAccessRestrictionsResponse withSimpleUsers(openapisdk.models.shared.SimpleUser[] simpleUsers) {
        this.simpleUsers = simpleUsers;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposAddUserAccessRestrictionsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}