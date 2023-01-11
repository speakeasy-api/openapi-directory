package openapisdk.models.operations;



public class GetProjectUsernameProjectResponse {
    public openapisdk.models.shared.Build[] builds;
    public GetProjectUsernameProjectResponse withBuilds(openapisdk.models.shared.Build[] builds) {
        this.builds = builds;
        return this;
    }
    public String contentType;
    public GetProjectUsernameProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProjectUsernameProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}