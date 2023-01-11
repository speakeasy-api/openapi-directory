package openapisdk.models.operations;



public class GetDomainStatisticsReportRequest {
    public GetDomainStatisticsReportPathParams pathParams;
    public GetDomainStatisticsReportRequest withPathParams(GetDomainStatisticsReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDomainStatisticsReportQueryParams queryParams;
    public GetDomainStatisticsReportRequest withQueryParams(GetDomainStatisticsReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDomainStatisticsReportHeaders headers;
    public GetDomainStatisticsReportRequest withHeaders(GetDomainStatisticsReportHeaders headers) {
        this.headers = headers;
        return this;
    }
}