package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectNotesCreateRequest {
    public PrivateProjectNotesCreatePathParams pathParams;
    public PrivateProjectNotesCreateRequest withPathParams(PrivateProjectNotesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProjectNoteCreate request;
    public PrivateProjectNotesCreateRequest withRequest(openapisdk.models.shared.ProjectNoteCreate request) {
        this.request = request;
        return this;
    }
    public PrivateProjectNotesCreateSecurity security;
    public PrivateProjectNotesCreateRequest withSecurity(PrivateProjectNotesCreateSecurity security) {
        this.security = security;
        return this;
    }
}