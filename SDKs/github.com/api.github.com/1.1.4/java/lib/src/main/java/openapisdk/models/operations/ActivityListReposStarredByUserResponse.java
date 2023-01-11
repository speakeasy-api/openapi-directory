package openapisdk.models.operations;



public class ActivityListReposStarredByUserResponse {
    public String contentType;
    public ActivityListReposStarredByUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActivityListReposStarredByUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActivityListReposStarredByUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Repository[] repositories;
    public ActivityListReposStarredByUserResponse withRepositories(openapisdk.models.shared.Repository[] repositories) {
        this.repositories = repositories;
        return this;
    }
    public openapisdk.models.shared.StarredRepository[] starredRepositories;
    public ActivityListReposStarredByUserResponse withStarredRepositories(openapisdk.models.shared.StarredRepository[] starredRepositories) {
        this.starredRepositories = starredRepositories;
        return this;
    }
}