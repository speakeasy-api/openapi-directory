package openapisdk.models.operations;



public class BillingGetGithubPackagesBillingUserResponse {
    public String contentType;
    public BillingGetGithubPackagesBillingUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BillingGetGithubPackagesBillingUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PackagesBillingUsage packagesBillingUsage;
    public BillingGetGithubPackagesBillingUserResponse withPackagesBillingUsage(openapisdk.models.shared.PackagesBillingUsage packagesBillingUsage) {
        this.packagesBillingUsage = packagesBillingUsage;
        return this;
    }
}