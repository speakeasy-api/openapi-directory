package openapisdk.models.operations;



public class ScimUpdateAttributeForUserResponse {
    public String contentType;
    public ScimUpdateAttributeForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ScimUpdateAttributeForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ScimUpdateAttributeForUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public ScimUpdateAttributeForUserResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
    public openapisdk.models.shared.ScimUser scimUser;
    public ScimUpdateAttributeForUserResponse withScimUser(openapisdk.models.shared.ScimUser scimUser) {
        this.scimUser = scimUser;
        return this;
    }
}