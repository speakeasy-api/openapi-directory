package openapisdk.models.operations;



public class ActivityListReposStarredByAuthenticatedUserResponse {
    public String contentType;
    public ActivityListReposStarredByAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActivityListReposStarredByAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActivityListReposStarredByAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivityListReposStarredByAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Repository[] repositories;
    public ActivityListReposStarredByAuthenticatedUserResponse withRepositories(openapisdk.models.shared.Repository[] repositories) {
        this.repositories = repositories;
        return this;
    }
    public openapisdk.models.shared.StarredRepository[] starredRepositories;
    public ActivityListReposStarredByAuthenticatedUserResponse withStarredRepositories(openapisdk.models.shared.StarredRepository[] starredRepositories) {
        this.starredRepositories = starredRepositories;
        return this;
    }
}