package openapisdk.models.operations;



public class PrivateProjectNotesListRequest {
    public PrivateProjectNotesListPathParams pathParams;
    public PrivateProjectNotesListRequest withPathParams(PrivateProjectNotesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectNotesListQueryParams queryParams;
    public PrivateProjectNotesListRequest withQueryParams(PrivateProjectNotesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PrivateProjectNotesListSecurity security;
    public PrivateProjectNotesListRequest withSecurity(PrivateProjectNotesListSecurity security) {
        this.security = security;
        return this;
    }
}