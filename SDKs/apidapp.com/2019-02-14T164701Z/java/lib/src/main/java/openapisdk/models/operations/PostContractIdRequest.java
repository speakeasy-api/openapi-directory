package openapisdk.models.operations;



public class PostContractIdRequest {
    public PostContractIdPathParams pathParams;
    public PostContractIdRequest withPathParams(PostContractIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostContractIdSecurity security;
    public PostContractIdRequest withSecurity(PostContractIdSecurity security) {
        this.security = security;
        return this;
    }
}