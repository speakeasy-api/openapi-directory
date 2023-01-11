package openapisdk.models.operations;



public class SubscriptionsGetResponse {
    public openapisdk.models.shared.AppPkgSubscriptionLinkList appPkgSubscriptionLinkList;
    public SubscriptionsGetResponse withAppPkgSubscriptionLinkList(openapisdk.models.shared.AppPkgSubscriptionLinkList appPkgSubscriptionLinkList) {
        this.appPkgSubscriptionLinkList = appPkgSubscriptionLinkList;
        return this;
    }
    public String contentType;
    public SubscriptionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public SubscriptionsGetResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public SubscriptionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}