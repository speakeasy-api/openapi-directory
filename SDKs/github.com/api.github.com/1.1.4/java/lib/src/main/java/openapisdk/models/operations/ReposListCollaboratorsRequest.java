package openapisdk.models.operations;



public class ReposListCollaboratorsRequest {
    public ReposListCollaboratorsPathParams pathParams;
    public ReposListCollaboratorsRequest withPathParams(ReposListCollaboratorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListCollaboratorsQueryParams queryParams;
    public ReposListCollaboratorsRequest withQueryParams(ReposListCollaboratorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}