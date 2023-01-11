package openapisdk.models.operations;



public class ReposRequestPagesBuildResponse {
    public String contentType;
    public ReposRequestPagesBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposRequestPagesBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PageBuildStatus pageBuildStatus;
    public ReposRequestPagesBuildResponse withPageBuildStatus(openapisdk.models.shared.PageBuildStatus pageBuildStatus) {
        this.pageBuildStatus = pageBuildStatus;
        return this;
    }
}