package openapisdk.models.operations;



public class GetSchedulesRequest {
    public GetSchedulesQueryParams queryParams;
    public GetSchedulesRequest withQueryParams(GetSchedulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSchedulesSecurity security;
    public GetSchedulesRequest withSecurity(GetSchedulesSecurity security) {
        this.security = security;
        return this;
    }
}