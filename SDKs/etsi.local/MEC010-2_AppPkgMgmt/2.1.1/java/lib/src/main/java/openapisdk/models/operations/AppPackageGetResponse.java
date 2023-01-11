package openapisdk.models.operations;



public class AppPackageGetResponse {
    public openapisdk.models.shared.AppPkgInfo appPkgInfo;
    public AppPackageGetResponse withAppPkgInfo(openapisdk.models.shared.AppPkgInfo appPkgInfo) {
        this.appPkgInfo = appPkgInfo;
        return this;
    }
    public String contentType;
    public AppPackageGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public AppPackageGetResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public AppPackageGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}