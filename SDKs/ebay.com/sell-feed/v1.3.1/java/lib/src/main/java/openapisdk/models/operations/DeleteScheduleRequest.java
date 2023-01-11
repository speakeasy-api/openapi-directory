package openapisdk.models.operations;



public class DeleteScheduleRequest {
    public DeleteSchedulePathParams pathParams;
    public DeleteScheduleRequest withPathParams(DeleteSchedulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteScheduleSecurity security;
    public DeleteScheduleRequest withSecurity(DeleteScheduleSecurity security) {
        this.security = security;
        return this;
    }
}