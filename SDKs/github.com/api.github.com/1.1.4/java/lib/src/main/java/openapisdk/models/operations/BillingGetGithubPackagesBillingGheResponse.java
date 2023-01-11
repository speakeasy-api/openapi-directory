package openapisdk.models.operations;



public class BillingGetGithubPackagesBillingGheResponse {
    public String contentType;
    public BillingGetGithubPackagesBillingGheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BillingGetGithubPackagesBillingGheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PackagesBillingUsage packagesBillingUsage;
    public BillingGetGithubPackagesBillingGheResponse withPackagesBillingUsage(openapisdk.models.shared.PackagesBillingUsage packagesBillingUsage) {
        this.packagesBillingUsage = packagesBillingUsage;
        return this;
    }
}