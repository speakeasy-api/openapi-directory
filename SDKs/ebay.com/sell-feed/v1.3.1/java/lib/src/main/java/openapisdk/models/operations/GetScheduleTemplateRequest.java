package openapisdk.models.operations;



public class GetScheduleTemplateRequest {
    public GetScheduleTemplatePathParams pathParams;
    public GetScheduleTemplateRequest withPathParams(GetScheduleTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScheduleTemplateSecurity security;
    public GetScheduleTemplateRequest withSecurity(GetScheduleTemplateSecurity security) {
        this.security = security;
        return this;
    }
}