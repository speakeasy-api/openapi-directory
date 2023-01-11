package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotesUpdateRequest {
    public NotesUpdatePathParams pathParams;
    public NotesUpdateRequest withPathParams(NotesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotesUpdateQueryParams queryParams;
    public NotesUpdateRequest withQueryParams(NotesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public NotesUpdateHeaders headers;
    public NotesUpdateRequest withHeaders(NotesUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NoteInput request;
    public NotesUpdateRequest withRequest(openapisdk.models.shared.NoteInput request) {
        this.request = request;
        return this;
    }
    public NotesUpdateSecurity security;
    public NotesUpdateRequest withSecurity(NotesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}