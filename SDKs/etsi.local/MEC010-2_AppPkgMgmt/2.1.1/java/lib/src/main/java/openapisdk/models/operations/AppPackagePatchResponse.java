package openapisdk.models.operations;



public class AppPackagePatchResponse {
    public openapisdk.models.shared.AppPkgInfoModifications appPkgInfoModifications;
    public AppPackagePatchResponse withAppPkgInfoModifications(openapisdk.models.shared.AppPkgInfoModifications appPkgInfoModifications) {
        this.appPkgInfoModifications = appPkgInfoModifications;
        return this;
    }
    public String contentType;
    public AppPackagePatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public AppPackagePatchResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public AppPackagePatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}