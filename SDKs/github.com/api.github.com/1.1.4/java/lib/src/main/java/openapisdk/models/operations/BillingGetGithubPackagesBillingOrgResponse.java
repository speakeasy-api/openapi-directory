package openapisdk.models.operations;



public class BillingGetGithubPackagesBillingOrgResponse {
    public String contentType;
    public BillingGetGithubPackagesBillingOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BillingGetGithubPackagesBillingOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PackagesBillingUsage packagesBillingUsage;
    public BillingGetGithubPackagesBillingOrgResponse withPackagesBillingUsage(openapisdk.models.shared.PackagesBillingUsage packagesBillingUsage) {
        this.packagesBillingUsage = packagesBillingUsage;
        return this;
    }
}