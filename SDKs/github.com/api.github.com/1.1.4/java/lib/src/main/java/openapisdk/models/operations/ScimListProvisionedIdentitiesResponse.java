package openapisdk.models.operations;



public class ScimListProvisionedIdentitiesResponse {
    public String contentType;
    public ScimListProvisionedIdentitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ScimListProvisionedIdentitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public ScimListProvisionedIdentitiesResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
    public openapisdk.models.shared.ScimUserList scimUserList;
    public ScimListProvisionedIdentitiesResponse withScimUserList(openapisdk.models.shared.ScimUserList scimUserList) {
        this.scimUserList = scimUserList;
        return this;
    }
}