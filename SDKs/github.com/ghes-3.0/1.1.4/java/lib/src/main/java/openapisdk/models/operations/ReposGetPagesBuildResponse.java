package openapisdk.models.operations;



public class ReposGetPagesBuildResponse {
    public String contentType;
    public ReposGetPagesBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetPagesBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PageBuild pageBuild;
    public ReposGetPagesBuildResponse withPageBuild(openapisdk.models.shared.PageBuild pageBuild) {
        this.pageBuild = pageBuild;
        return this;
    }
}