package openapisdk.models.operations;



public class PrivateProjectDetailsResponse {
    public String contentType;
    public PrivateProjectDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectDetailsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.ProjectCompletePrivate projectCompletePrivate;
    public PrivateProjectDetailsResponse withProjectCompletePrivate(openapisdk.models.shared.ProjectCompletePrivate projectCompletePrivate) {
        this.projectCompletePrivate = projectCompletePrivate;
        return this;
    }
    public Long statusCode;
    public PrivateProjectDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}