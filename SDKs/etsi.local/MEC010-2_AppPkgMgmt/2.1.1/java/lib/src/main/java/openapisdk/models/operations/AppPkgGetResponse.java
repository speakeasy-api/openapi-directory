package openapisdk.models.operations;



public class AppPkgGetResponse {
    public String contentType;
    public AppPkgGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public AppPkgGetResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public AppPkgGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}