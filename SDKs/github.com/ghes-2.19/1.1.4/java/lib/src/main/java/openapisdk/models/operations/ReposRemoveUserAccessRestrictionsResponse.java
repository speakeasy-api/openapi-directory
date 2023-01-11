package openapisdk.models.operations;



public class ReposRemoveUserAccessRestrictionsResponse {
    public String contentType;
    public ReposRemoveUserAccessRestrictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposRemoveUserAccessRestrictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SimpleUser[] simpleUsers;
    public ReposRemoveUserAccessRestrictionsResponse withSimpleUsers(openapisdk.models.shared.SimpleUser[] simpleUsers) {
        this.simpleUsers = simpleUsers;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposRemoveUserAccessRestrictionsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}