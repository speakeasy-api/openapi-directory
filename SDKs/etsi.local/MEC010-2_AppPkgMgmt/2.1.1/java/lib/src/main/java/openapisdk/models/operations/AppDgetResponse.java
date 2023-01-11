package openapisdk.models.operations;



public class AppDgetResponse {
    public String appD;
    public AppDgetResponse withAppD(String appD) {
        this.appD = appD;
        return this;
    }
    public byte[] body;
    public AppDgetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AppDgetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public AppDgetResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public AppDgetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}