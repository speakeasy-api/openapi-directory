package openapisdk.models.operations;



public class ActivityListReposWatchedByUserResponse {
    public String contentType;
    public ActivityListReposWatchedByUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActivityListReposWatchedByUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActivityListReposWatchedByUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MinimalRepository[] minimalRepositories;
    public ActivityListReposWatchedByUserResponse withMinimalRepositories(openapisdk.models.shared.MinimalRepository[] minimalRepositories) {
        this.minimalRepositories = minimalRepositories;
        return this;
    }
}