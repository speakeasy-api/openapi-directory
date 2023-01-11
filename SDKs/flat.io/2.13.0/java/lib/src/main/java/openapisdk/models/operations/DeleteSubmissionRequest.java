package openapisdk.models.operations;



public class DeleteSubmissionRequest {
    public DeleteSubmissionPathParams pathParams;
    public DeleteSubmissionRequest withPathParams(DeleteSubmissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSubmissionSecurity security;
    public DeleteSubmissionRequest withSecurity(DeleteSubmissionSecurity security) {
        this.security = security;
        return this;
    }
}