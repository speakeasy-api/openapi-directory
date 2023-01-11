package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyAssignmentRequest {
    public CopyAssignmentPathParams pathParams;
    public CopyAssignmentRequest withPathParams(CopyAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignmentCopy request;
    public CopyAssignmentRequest withRequest(openapisdk.models.shared.AssignmentCopy request) {
        this.request = request;
        return this;
    }
    public CopyAssignmentSecurity security;
    public CopyAssignmentRequest withSecurity(CopyAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}