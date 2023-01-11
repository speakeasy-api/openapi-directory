package openapisdk.models.operations;



public class ListReportDefinitionsRequest {
    public ListReportDefinitionsQueryParams queryParams;
    public ListReportDefinitionsRequest withQueryParams(ListReportDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListReportDefinitionsHeaders headers;
    public ListReportDefinitionsRequest withHeaders(ListReportDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}