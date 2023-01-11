package openapisdk.models.operations;



public class DescribeDashboardRequest {
    public DescribeDashboardPathParams pathParams;
    public DescribeDashboardRequest withPathParams(DescribeDashboardPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeDashboardHeaders headers;
    public DescribeDashboardRequest withHeaders(DescribeDashboardHeaders headers) {
        this.headers = headers;
        return this;
    }
}