package openapisdk.models.operations;



public class PostProjectUsernameProjectBuildNumRetryResponse {
    public openapisdk.models.shared.Build build;
    public PostProjectUsernameProjectBuildNumRetryResponse withBuild(openapisdk.models.shared.Build build) {
        this.build = build;
        return this;
    }
    public String contentType;
    public PostProjectUsernameProjectBuildNumRetryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostProjectUsernameProjectBuildNumRetryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}