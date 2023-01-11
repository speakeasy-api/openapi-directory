package openapisdk.models.operations;



public class AppPackagesGetResponse {
    public openapisdk.models.shared.AppPkgInfo[] appPkgInfos;
    public AppPackagesGetResponse withAppPkgInfos(openapisdk.models.shared.AppPkgInfo[] appPkgInfos) {
        this.appPkgInfos = appPkgInfos;
        return this;
    }
    public String contentType;
    public AppPackagesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public AppPackagesGetResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public AppPackagesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}