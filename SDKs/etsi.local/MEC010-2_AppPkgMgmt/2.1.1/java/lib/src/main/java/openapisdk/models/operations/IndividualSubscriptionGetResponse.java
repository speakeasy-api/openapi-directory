package openapisdk.models.operations;



public class IndividualSubscriptionGetResponse {
    public openapisdk.models.shared.AppPkgSubscriptionInfo appPkgSubscriptionInfo;
    public IndividualSubscriptionGetResponse withAppPkgSubscriptionInfo(openapisdk.models.shared.AppPkgSubscriptionInfo appPkgSubscriptionInfo) {
        this.appPkgSubscriptionInfo = appPkgSubscriptionInfo;
        return this;
    }
    public String contentType;
    public IndividualSubscriptionGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemDetails problemDetails;
    public IndividualSubscriptionGetResponse withProblemDetails(openapisdk.models.shared.ProblemDetails problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public IndividualSubscriptionGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}