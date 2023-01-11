package openapisdk.models.operations;



public class ReposGetLatestPagesBuildResponse {
    public String contentType;
    public ReposGetLatestPagesBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetLatestPagesBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PageBuild pageBuild;
    public ReposGetLatestPagesBuildResponse withPageBuild(openapisdk.models.shared.PageBuild pageBuild) {
        this.pageBuild = pageBuild;
        return this;
    }
}