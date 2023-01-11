package openapisdk.models.operations;



public class AppPackagesPostResponse {
    public openapisdk.models.shared.AppPkgInfo[] appPkgInfos;
    public AppPackagesPostResponse withAppPkgInfos(openapisdk.models.shared.AppPkgInfo[] appPkgInfos) {
        this.appPkgInfos = appPkgInfos;
        return this;
    }
    public String contentType;
    public AppPackagesPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public AppPackagesPostResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public AppPackagesPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}