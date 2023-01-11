package openapisdk.models.operations;



public class ReposGetAppsWithAccessToProtectedBranchResponse {
    public String contentType;
    public ReposGetAppsWithAccessToProtectedBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetAppsWithAccessToProtectedBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetAppsWithAccessToProtectedBranchResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public java.util.Map<String, Object>[] integrations;
    public ReposGetAppsWithAccessToProtectedBranchResponse withIntegrations(java.util.Map<String, Object>[] integrations) {
        this.integrations = integrations;
        return this;
    }
}