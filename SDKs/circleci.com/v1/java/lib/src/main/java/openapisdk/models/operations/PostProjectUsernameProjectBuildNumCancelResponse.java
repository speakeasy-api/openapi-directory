package openapisdk.models.operations;



public class PostProjectUsernameProjectBuildNumCancelResponse {
    public openapisdk.models.shared.Build build;
    public PostProjectUsernameProjectBuildNumCancelResponse withBuild(openapisdk.models.shared.Build build) {
        this.build = build;
        return this;
    }
    public String contentType;
    public PostProjectUsernameProjectBuildNumCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostProjectUsernameProjectBuildNumCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}