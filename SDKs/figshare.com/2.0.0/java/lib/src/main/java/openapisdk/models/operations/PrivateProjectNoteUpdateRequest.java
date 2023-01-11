package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectNoteUpdateRequest {
    public PrivateProjectNoteUpdatePathParams pathParams;
    public PrivateProjectNoteUpdateRequest withPathParams(PrivateProjectNoteUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProjectNoteCreate request;
    public PrivateProjectNoteUpdateRequest withRequest(openapisdk.models.shared.ProjectNoteCreate request) {
        this.request = request;
        return this;
    }
    public PrivateProjectNoteUpdateSecurity security;
    public PrivateProjectNoteUpdateRequest withSecurity(PrivateProjectNoteUpdateSecurity security) {
        this.security = security;
        return this;
    }
}