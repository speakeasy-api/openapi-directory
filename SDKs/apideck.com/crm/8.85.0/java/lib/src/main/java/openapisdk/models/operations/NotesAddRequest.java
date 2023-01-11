package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotesAddRequest {
    public NotesAddQueryParams queryParams;
    public NotesAddRequest withQueryParams(NotesAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public NotesAddHeaders headers;
    public NotesAddRequest withHeaders(NotesAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NoteInput request;
    public NotesAddRequest withRequest(openapisdk.models.shared.NoteInput request) {
        this.request = request;
        return this;
    }
    public NotesAddSecurity security;
    public NotesAddRequest withSecurity(NotesAddSecurity security) {
        this.security = security;
        return this;
    }
}