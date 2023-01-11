package openapisdk.models.operations;



public class GetRecentBuildsResponse {
    public openapisdk.models.shared.Build[] builds;
    public GetRecentBuildsResponse withBuilds(openapisdk.models.shared.Build[] builds) {
        this.builds = builds;
        return this;
    }
    public String contentType;
    public GetRecentBuildsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRecentBuildsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}