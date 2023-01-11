package openapisdk.models.operations;



public class ScimProvisionAndInviteUserResponse {
    public String contentType;
    public ScimProvisionAndInviteUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ScimProvisionAndInviteUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public ScimProvisionAndInviteUserResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
    public openapisdk.models.shared.ScimUser scimUser;
    public ScimProvisionAndInviteUserResponse withScimUser(openapisdk.models.shared.ScimUser scimUser) {
        this.scimUser = scimUser;
        return this;
    }
}