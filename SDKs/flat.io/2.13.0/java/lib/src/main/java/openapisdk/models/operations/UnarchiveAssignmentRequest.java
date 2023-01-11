package openapisdk.models.operations;



public class UnarchiveAssignmentRequest {
    public UnarchiveAssignmentPathParams pathParams;
    public UnarchiveAssignmentRequest withPathParams(UnarchiveAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UnarchiveAssignmentSecurity security;
    public UnarchiveAssignmentRequest withSecurity(UnarchiveAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}