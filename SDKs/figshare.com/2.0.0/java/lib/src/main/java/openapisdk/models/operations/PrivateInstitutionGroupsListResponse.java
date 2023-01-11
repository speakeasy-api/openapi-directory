package openapisdk.models.operations;



public class PrivateInstitutionGroupsListResponse {
    public String contentType;
    public PrivateInstitutionGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateInstitutionGroupsListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.Group[] groups;
    public PrivateInstitutionGroupsListResponse withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
    public Long statusCode;
    public PrivateInstitutionGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}