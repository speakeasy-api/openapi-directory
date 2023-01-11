package openapisdk.models.operations;



public class DeleteOrganizationResponse {
    public String contentType;
    public DeleteOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteOrganizationResponse deleteOrganizationResponse;
    public DeleteOrganizationResponse withDeleteOrganizationResponse(openapisdk.models.shared.DeleteOrganizationResponse deleteOrganizationResponse) {
        this.deleteOrganizationResponse = deleteOrganizationResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteOrganizationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DeleteOrganizationResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DeleteOrganizationResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DeleteOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}