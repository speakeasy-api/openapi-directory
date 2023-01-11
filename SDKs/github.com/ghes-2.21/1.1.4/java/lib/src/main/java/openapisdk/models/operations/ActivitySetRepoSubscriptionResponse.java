package openapisdk.models.operations;



public class ActivitySetRepoSubscriptionResponse {
    public String contentType;
    public ActivitySetRepoSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivitySetRepoSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RepositorySubscription repositorySubscription;
    public ActivitySetRepoSubscriptionResponse withRepositorySubscription(openapisdk.models.shared.RepositorySubscription repositorySubscription) {
        this.repositorySubscription = repositorySubscription;
        return this;
    }
}