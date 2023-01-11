package openapisdk.models.operations;



public class PrivateProjectsListResponse {
    public String contentType;
    public PrivateProjectsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectsListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.ProjectPrivate[] projectPrivates;
    public PrivateProjectsListResponse withProjectPrivates(openapisdk.models.shared.ProjectPrivate[] projectPrivates) {
        this.projectPrivates = projectPrivates;
        return this;
    }
    public Long statusCode;
    public PrivateProjectsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}