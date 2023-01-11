package openapisdk.models.operations;



public class GetUsageTotalsRequest {
    public GetUsageTotalsQueryParams queryParams;
    public GetUsageTotalsRequest withQueryParams(GetUsageTotalsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUsageTotalsHeaders headers;
    public GetUsageTotalsRequest withHeaders(GetUsageTotalsHeaders headers) {
        this.headers = headers;
        return this;
    }
}