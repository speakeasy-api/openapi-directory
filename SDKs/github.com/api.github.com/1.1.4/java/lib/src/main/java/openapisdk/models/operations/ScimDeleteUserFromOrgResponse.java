package openapisdk.models.operations;



public class ScimDeleteUserFromOrgResponse {
    public String contentType;
    public ScimDeleteUserFromOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ScimDeleteUserFromOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public ScimDeleteUserFromOrgResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
}