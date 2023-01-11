package openapisdk.models.operations;



public class OrgsGetResponse {
    public String contentType;
    public OrgsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsGetResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrganizationFull organizationFull;
    public OrgsGetResponse withOrganizationFull(openapisdk.models.shared.OrganizationFull organizationFull) {
        this.organizationFull = organizationFull;
        return this;
    }
}