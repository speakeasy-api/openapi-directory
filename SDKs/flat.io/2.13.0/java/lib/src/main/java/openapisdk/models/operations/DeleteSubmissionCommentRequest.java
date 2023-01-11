package openapisdk.models.operations;



public class DeleteSubmissionCommentRequest {
    public DeleteSubmissionCommentPathParams pathParams;
    public DeleteSubmissionCommentRequest withPathParams(DeleteSubmissionCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSubmissionCommentSecurity security;
    public DeleteSubmissionCommentRequest withSecurity(DeleteSubmissionCommentSecurity security) {
        this.security = security;
        return this;
    }
}