package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSubmissionCommentRequest {
    public PostSubmissionCommentPathParams pathParams;
    public PostSubmissionCommentRequest withPathParams(PostSubmissionCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignmentSubmissionCommentCreation request;
    public PostSubmissionCommentRequest withRequest(openapisdk.models.shared.AssignmentSubmissionCommentCreation request) {
        this.request = request;
        return this;
    }
    public PostSubmissionCommentSecurity security;
    public PostSubmissionCommentRequest withSecurity(PostSubmissionCommentSecurity security) {
        this.security = security;
        return this;
    }
}