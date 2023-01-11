package openapisdk.models.operations;



public class GetScheduleRequest {
    public GetSchedulePathParams pathParams;
    public GetScheduleRequest withPathParams(GetSchedulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScheduleSecurity security;
    public GetScheduleRequest withSecurity(GetScheduleSecurity security) {
        this.security = security;
        return this;
    }
}