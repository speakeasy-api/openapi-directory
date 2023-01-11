package openapisdk.models.operations;



public class ListAssignmentsRequest {
    public ListAssignmentsPathParams pathParams;
    public ListAssignmentsRequest withPathParams(ListAssignmentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAssignmentsSecurity security;
    public ListAssignmentsRequest withSecurity(ListAssignmentsSecurity security) {
        this.security = security;
        return this;
    }
}