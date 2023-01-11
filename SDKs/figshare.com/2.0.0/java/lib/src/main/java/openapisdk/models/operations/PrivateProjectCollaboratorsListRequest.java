package openapisdk.models.operations;



public class PrivateProjectCollaboratorsListRequest {
    public PrivateProjectCollaboratorsListPathParams pathParams;
    public PrivateProjectCollaboratorsListRequest withPathParams(PrivateProjectCollaboratorsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectCollaboratorsListSecurity security;
    public PrivateProjectCollaboratorsListRequest withSecurity(PrivateProjectCollaboratorsListSecurity security) {
        this.security = security;
        return this;
    }
}