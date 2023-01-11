package openapisdk.models.operations;



public class ActivityGetRepoSubscriptionResponse {
    public String contentType;
    public ActivityGetRepoSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityGetRepoSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivityGetRepoSubscriptionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.RepositorySubscription repositorySubscription;
    public ActivityGetRepoSubscriptionResponse withRepositorySubscription(openapisdk.models.shared.RepositorySubscription repositorySubscription) {
        this.repositorySubscription = repositorySubscription;
        return this;
    }
}