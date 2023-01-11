package openapisdk.models.operations;



public class GetScheduleTemplatesRequest {
    public GetScheduleTemplatesQueryParams queryParams;
    public GetScheduleTemplatesRequest withQueryParams(GetScheduleTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetScheduleTemplatesSecurity security;
    public GetScheduleTemplatesRequest withSecurity(GetScheduleTemplatesSecurity security) {
        this.security = security;
        return this;
    }
}