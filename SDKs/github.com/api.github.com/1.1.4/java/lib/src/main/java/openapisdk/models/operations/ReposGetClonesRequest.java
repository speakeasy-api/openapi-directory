package openapisdk.models.operations;



public class ReposGetClonesRequest {
    public ReposGetClonesPathParams pathParams;
    public ReposGetClonesRequest withPathParams(ReposGetClonesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposGetClonesQueryParams queryParams;
    public ReposGetClonesRequest withQueryParams(ReposGetClonesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}