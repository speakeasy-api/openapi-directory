package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubmissionCommentRequest {
    public UpdateSubmissionCommentPathParams pathParams;
    public UpdateSubmissionCommentRequest withPathParams(UpdateSubmissionCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignmentSubmissionCommentCreation request;
    public UpdateSubmissionCommentRequest withRequest(openapisdk.models.shared.AssignmentSubmissionCommentCreation request) {
        this.request = request;
        return this;
    }
    public UpdateSubmissionCommentSecurity security;
    public UpdateSubmissionCommentRequest withSecurity(UpdateSubmissionCommentSecurity security) {
        this.security = security;
        return this;
    }
}