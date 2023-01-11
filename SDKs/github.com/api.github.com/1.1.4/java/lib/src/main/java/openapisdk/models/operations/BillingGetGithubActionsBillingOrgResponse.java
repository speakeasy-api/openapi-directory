package openapisdk.models.operations;



public class BillingGetGithubActionsBillingOrgResponse {
    public String contentType;
    public BillingGetGithubActionsBillingOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BillingGetGithubActionsBillingOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ActionsBillingUsage actionsBillingUsage;
    public BillingGetGithubActionsBillingOrgResponse withActionsBillingUsage(openapisdk.models.shared.ActionsBillingUsage actionsBillingUsage) {
        this.actionsBillingUsage = actionsBillingUsage;
        return this;
    }
}