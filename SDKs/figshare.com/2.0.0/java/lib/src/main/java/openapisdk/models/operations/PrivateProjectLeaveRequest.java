package openapisdk.models.operations;



public class PrivateProjectLeaveRequest {
    public PrivateProjectLeavePathParams pathParams;
    public PrivateProjectLeaveRequest withPathParams(PrivateProjectLeavePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectLeaveSecurity security;
    public PrivateProjectLeaveRequest withSecurity(PrivateProjectLeaveSecurity security) {
        this.security = security;
        return this;
    }
}