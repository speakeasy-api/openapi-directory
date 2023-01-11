package openapisdk.models.operations;



public class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse {
    public String contentType;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RepositoryPreReceiveHook repositoryPreReceiveHook;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse withRepositoryPreReceiveHook(openapisdk.models.shared.RepositoryPreReceiveHook repositoryPreReceiveHook) {
        this.repositoryPreReceiveHook = repositoryPreReceiveHook;
        return this;
    }
}