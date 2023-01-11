package openapisdk.models.operations;



public class SubscriptionsPostResponse {
    public openapisdk.models.shared.AppPkgSubscriptionInfo appPkgSubscriptionInfo;
    public SubscriptionsPostResponse withAppPkgSubscriptionInfo(openapisdk.models.shared.AppPkgSubscriptionInfo appPkgSubscriptionInfo) {
        this.appPkgSubscriptionInfo = appPkgSubscriptionInfo;
        return this;
    }
    public String contentType;
    public SubscriptionsPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public SubscriptionsPostResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public SubscriptionsPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}