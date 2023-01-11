package openapisdk.models.operations;



public class ListOrganizationsResponse {
    public String contentType;
    public ListOrganizationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListOrganizationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListOrganizationsResponse listOrganizationsResponse;
    public ListOrganizationsResponse withListOrganizationsResponse(openapisdk.models.shared.ListOrganizationsResponse listOrganizationsResponse) {
        this.listOrganizationsResponse = listOrganizationsResponse;
        return this;
    }
    public Long statusCode;
    public ListOrganizationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}