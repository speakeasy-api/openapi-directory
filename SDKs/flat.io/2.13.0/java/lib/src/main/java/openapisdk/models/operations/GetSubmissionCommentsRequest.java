package openapisdk.models.operations;



public class GetSubmissionCommentsRequest {
    public GetSubmissionCommentsPathParams pathParams;
    public GetSubmissionCommentsRequest withPathParams(GetSubmissionCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSubmissionCommentsSecurity security;
    public GetSubmissionCommentsRequest withSecurity(GetSubmissionCommentsSecurity security) {
        this.security = security;
        return this;
    }
}