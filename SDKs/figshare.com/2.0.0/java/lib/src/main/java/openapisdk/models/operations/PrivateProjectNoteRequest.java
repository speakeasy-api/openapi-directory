package openapisdk.models.operations;



public class PrivateProjectNoteRequest {
    public PrivateProjectNotePathParams pathParams;
    public PrivateProjectNoteRequest withPathParams(PrivateProjectNotePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectNoteSecurity security;
    public PrivateProjectNoteRequest withSecurity(PrivateProjectNoteSecurity security) {
        this.security = security;
        return this;
    }
}