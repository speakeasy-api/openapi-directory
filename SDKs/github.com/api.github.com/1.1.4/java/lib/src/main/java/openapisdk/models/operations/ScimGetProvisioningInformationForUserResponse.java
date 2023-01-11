package openapisdk.models.operations;



public class ScimGetProvisioningInformationForUserResponse {
    public String contentType;
    public ScimGetProvisioningInformationForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ScimGetProvisioningInformationForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public ScimGetProvisioningInformationForUserResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
    public openapisdk.models.shared.ScimUser scimUser;
    public ScimGetProvisioningInformationForUserResponse withScimUser(openapisdk.models.shared.ScimUser scimUser) {
        this.scimUser = scimUser;
        return this;
    }
}