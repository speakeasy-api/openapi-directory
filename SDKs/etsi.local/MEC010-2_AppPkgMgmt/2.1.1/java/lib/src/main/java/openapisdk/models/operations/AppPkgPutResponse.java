package openapisdk.models.operations;



public class AppPkgPutResponse {
    public String contentType;
    public AppPkgPutResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public AppPkgPutResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public AppPkgPutResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}