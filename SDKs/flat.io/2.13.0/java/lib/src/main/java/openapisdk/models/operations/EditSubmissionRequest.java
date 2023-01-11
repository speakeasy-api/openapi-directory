package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditSubmissionRequest {
    public EditSubmissionPathParams pathParams;
    public EditSubmissionRequest withPathParams(EditSubmissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignmentSubmissionUpdate request;
    public EditSubmissionRequest withRequest(openapisdk.models.shared.AssignmentSubmissionUpdate request) {
        this.request = request;
        return this;
    }
    public EditSubmissionSecurity security;
    public EditSubmissionRequest withSecurity(EditSubmissionSecurity security) {
        this.security = security;
        return this;
    }
}