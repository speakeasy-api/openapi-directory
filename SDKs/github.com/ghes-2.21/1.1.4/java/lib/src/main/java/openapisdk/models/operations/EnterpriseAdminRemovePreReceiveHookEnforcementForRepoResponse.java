package openapisdk.models.operations;



public class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse {
    public String contentType;
    public EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RepositoryPreReceiveHook repositoryPreReceiveHook;
    public EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse withRepositoryPreReceiveHook(openapisdk.models.shared.RepositoryPreReceiveHook repositoryPreReceiveHook) {
        this.repositoryPreReceiveHook = repositoryPreReceiveHook;
        return this;
    }
}