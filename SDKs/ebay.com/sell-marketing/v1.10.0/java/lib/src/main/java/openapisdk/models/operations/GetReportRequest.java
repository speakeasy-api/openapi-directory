package openapisdk.models.operations;



public class GetReportRequest {
    public GetReportPathParams pathParams;
    public GetReportRequest withPathParams(GetReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetReportSecurity security;
    public GetReportRequest withSecurity(GetReportSecurity security) {
        this.security = security;
        return this;
    }
}