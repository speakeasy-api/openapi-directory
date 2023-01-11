package openapisdk.models.operations;



public class BillingGetGithubActionsBillingGheResponse {
    public String contentType;
    public BillingGetGithubActionsBillingGheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BillingGetGithubActionsBillingGheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ActionsBillingUsage actionsBillingUsage;
    public BillingGetGithubActionsBillingGheResponse withActionsBillingUsage(openapisdk.models.shared.ActionsBillingUsage actionsBillingUsage) {
        this.actionsBillingUsage = actionsBillingUsage;
        return this;
    }
}