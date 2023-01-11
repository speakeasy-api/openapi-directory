package openapisdk.models.operations;



public class GetScoreCollaboratorRequest {
    public GetScoreCollaboratorPathParams pathParams;
    public GetScoreCollaboratorRequest withPathParams(GetScoreCollaboratorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScoreCollaboratorQueryParams queryParams;
    public GetScoreCollaboratorRequest withQueryParams(GetScoreCollaboratorQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetScoreCollaboratorSecurity security;
    public GetScoreCollaboratorRequest withSecurity(GetScoreCollaboratorSecurity security) {
        this.security = security;
        return this;
    }
}