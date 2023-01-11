package openapisdk.models.operations;



public class PostProjectUsernameProjectResponse {
    public openapisdk.models.shared.BuildSummary buildSummary;
    public PostProjectUsernameProjectResponse withBuildSummary(openapisdk.models.shared.BuildSummary buildSummary) {
        this.buildSummary = buildSummary;
        return this;
    }
    public String contentType;
    public PostProjectUsernameProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostProjectUsernameProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}