package openapisdk.models.operations;



public class ArchiveAssignmentRequest {
    public ArchiveAssignmentPathParams pathParams;
    public ArchiveAssignmentRequest withPathParams(ArchiveAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArchiveAssignmentSecurity security;
    public ArchiveAssignmentRequest withSecurity(ArchiveAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}