package openapisdk.models.operations;



public class AppPkgNotificationPostResponse {
    public String contentType;
    public AppPkgNotificationPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public AppPkgNotificationPostResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public AppPkgNotificationPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}