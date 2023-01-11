package openapisdk.models.operations;



public class AppPackageDeleteResponse {
    public String contentType;
    public AppPackageDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public AppPackageDeleteResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public AppPackageDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}