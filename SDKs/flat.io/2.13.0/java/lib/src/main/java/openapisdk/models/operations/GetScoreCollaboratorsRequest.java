package openapisdk.models.operations;



public class GetScoreCollaboratorsRequest {
    public GetScoreCollaboratorsPathParams pathParams;
    public GetScoreCollaboratorsRequest withPathParams(GetScoreCollaboratorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScoreCollaboratorsQueryParams queryParams;
    public GetScoreCollaboratorsRequest withQueryParams(GetScoreCollaboratorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetScoreCollaboratorsSecurity security;
    public GetScoreCollaboratorsRequest withSecurity(GetScoreCollaboratorsSecurity security) {
        this.security = security;
        return this;
    }
}