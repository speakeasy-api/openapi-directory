package openapisdk.models.operations;



public class ScimSetInformationForProvisionedUserResponse {
    public String contentType;
    public ScimSetInformationForProvisionedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ScimSetInformationForProvisionedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public ScimSetInformationForProvisionedUserResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
    public openapisdk.models.shared.ScimUser scimUser;
    public ScimSetInformationForProvisionedUserResponse withScimUser(openapisdk.models.shared.ScimUser scimUser) {
        this.scimUser = scimUser;
        return this;
    }
}