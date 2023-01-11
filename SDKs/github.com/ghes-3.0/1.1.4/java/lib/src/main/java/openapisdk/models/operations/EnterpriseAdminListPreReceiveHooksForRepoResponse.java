package openapisdk.models.operations;



public class EnterpriseAdminListPreReceiveHooksForRepoResponse {
    public String contentType;
    public EnterpriseAdminListPreReceiveHooksForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminListPreReceiveHooksForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RepositoryPreReceiveHook[] repositoryPreReceiveHooks;
    public EnterpriseAdminListPreReceiveHooksForRepoResponse withRepositoryPreReceiveHooks(openapisdk.models.shared.RepositoryPreReceiveHook[] repositoryPreReceiveHooks) {
        this.repositoryPreReceiveHooks = repositoryPreReceiveHooks;
        return this;
    }
}