package openapisdk.models.operations;



public class ReposListDeployKeysRequest {
    public ReposListDeployKeysPathParams pathParams;
    public ReposListDeployKeysRequest withPathParams(ReposListDeployKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListDeployKeysQueryParams queryParams;
    public ReposListDeployKeysRequest withQueryParams(ReposListDeployKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}