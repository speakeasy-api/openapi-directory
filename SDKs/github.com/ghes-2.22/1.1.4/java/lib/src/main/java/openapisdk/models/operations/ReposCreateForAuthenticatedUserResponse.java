package openapisdk.models.operations;



public class ReposCreateForAuthenticatedUserResponse {
    public String contentType;
    public ReposCreateForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposCreateForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposCreateForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposCreateForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Repository repository;
    public ReposCreateForAuthenticatedUserResponse withRepository(openapisdk.models.shared.Repository repository) {
        this.repository = repository;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public ReposCreateForAuthenticatedUserResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreateForAuthenticatedUserResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}