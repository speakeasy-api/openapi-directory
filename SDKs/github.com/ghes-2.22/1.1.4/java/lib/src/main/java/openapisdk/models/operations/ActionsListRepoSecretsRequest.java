package openapisdk.models.operations;



public class ActionsListRepoSecretsRequest {
    public ActionsListRepoSecretsPathParams pathParams;
    public ActionsListRepoSecretsRequest withPathParams(ActionsListRepoSecretsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ActionsListRepoSecretsQueryParams queryParams;
    public ActionsListRepoSecretsRequest withQueryParams(ActionsListRepoSecretsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}