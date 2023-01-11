package openapisdk.models.operations;



public class NotesOneRequest {
    public NotesOnePathParams pathParams;
    public NotesOneRequest withPathParams(NotesOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotesOneQueryParams queryParams;
    public NotesOneRequest withQueryParams(NotesOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public NotesOneHeaders headers;
    public NotesOneRequest withHeaders(NotesOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public NotesOneSecurity security;
    public NotesOneRequest withSecurity(NotesOneSecurity security) {
        this.security = security;
        return this;
    }
}