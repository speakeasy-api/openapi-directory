package openapisdk.models.operations;



public class ScimListProvisionedIdentitiesRequest {
    public ScimListProvisionedIdentitiesPathParams pathParams;
    public ScimListProvisionedIdentitiesRequest withPathParams(ScimListProvisionedIdentitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ScimListProvisionedIdentitiesQueryParams queryParams;
    public ScimListProvisionedIdentitiesRequest withQueryParams(ScimListProvisionedIdentitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}