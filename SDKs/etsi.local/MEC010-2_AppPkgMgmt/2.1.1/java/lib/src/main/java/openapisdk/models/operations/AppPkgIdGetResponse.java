package openapisdk.models.operations;



public class AppPkgIdGetResponse {
    public String appD;
    public AppPkgIdGetResponse withAppD(String appD) {
        this.appD = appD;
        return this;
    }
    public byte[] body;
    public AppPkgIdGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AppPkgIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public AppPkgIdGetResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public AppPkgIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}