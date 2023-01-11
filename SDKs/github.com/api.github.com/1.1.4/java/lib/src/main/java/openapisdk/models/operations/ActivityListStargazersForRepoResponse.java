package openapisdk.models.operations;



public class ActivityListStargazersForRepoResponse {
    public String contentType;
    public ActivityListStargazersForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActivityListStargazersForRepoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActivityListStargazersForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SimpleUser[] simpleUsers;
    public ActivityListStargazersForRepoResponse withSimpleUsers(openapisdk.models.shared.SimpleUser[] simpleUsers) {
        this.simpleUsers = simpleUsers;
        return this;
    }
    public openapisdk.models.shared.Stargazer[] stargazers;
    public ActivityListStargazersForRepoResponse withStargazers(openapisdk.models.shared.Stargazer[] stargazers) {
        this.stargazers = stargazers;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ActivityListStargazersForRepoResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}