package openapisdk.models.operations;



public class AppDIdPutResponse {
    public String contentType;
    public AppDIdPutResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public AppDIdPutResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public AppDIdPutResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}