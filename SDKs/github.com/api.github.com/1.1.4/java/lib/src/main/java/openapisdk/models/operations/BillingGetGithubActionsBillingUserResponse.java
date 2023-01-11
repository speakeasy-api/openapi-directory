package openapisdk.models.operations;



public class BillingGetGithubActionsBillingUserResponse {
    public String contentType;
    public BillingGetGithubActionsBillingUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BillingGetGithubActionsBillingUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ActionsBillingUsage actionsBillingUsage;
    public BillingGetGithubActionsBillingUserResponse withActionsBillingUsage(openapisdk.models.shared.ActionsBillingUsage actionsBillingUsage) {
        this.actionsBillingUsage = actionsBillingUsage;
        return this;
    }
}