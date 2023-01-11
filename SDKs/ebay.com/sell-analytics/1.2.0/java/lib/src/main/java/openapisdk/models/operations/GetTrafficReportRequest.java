package openapisdk.models.operations;



public class GetTrafficReportRequest {
    public GetTrafficReportQueryParams queryParams;
    public GetTrafficReportRequest withQueryParams(GetTrafficReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTrafficReportSecurity security;
    public GetTrafficReportRequest withSecurity(GetTrafficReportSecurity security) {
        this.security = security;
        return this;
    }
}