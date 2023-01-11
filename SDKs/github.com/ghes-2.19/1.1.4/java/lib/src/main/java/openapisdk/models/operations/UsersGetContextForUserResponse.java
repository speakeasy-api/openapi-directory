package openapisdk.models.operations;



public class UsersGetContextForUserResponse {
    public String contentType;
    public UsersGetContextForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersGetContextForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersGetContextForUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Hovercard hovercard;
    public UsersGetContextForUserResponse withHovercard(openapisdk.models.shared.Hovercard hovercard) {
        this.hovercard = hovercard;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public UsersGetContextForUserResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}