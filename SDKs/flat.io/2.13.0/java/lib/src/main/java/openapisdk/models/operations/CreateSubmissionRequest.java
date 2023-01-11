package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubmissionRequest {
    public CreateSubmissionPathParams pathParams;
    public CreateSubmissionRequest withPathParams(CreateSubmissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignmentSubmissionUpdate request;
    public CreateSubmissionRequest withRequest(openapisdk.models.shared.AssignmentSubmissionUpdate request) {
        this.request = request;
        return this;
    }
    public CreateSubmissionSecurity security;
    public CreateSubmissionRequest withSecurity(CreateSubmissionSecurity security) {
        this.security = security;
        return this;
    }
}