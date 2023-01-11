package openapisdk.models.operations;



public class ListAssociatedRoute53HealthChecksRequest {
    public ListAssociatedRoute53HealthChecksPathParams pathParams;
    public ListAssociatedRoute53HealthChecksRequest withPathParams(ListAssociatedRoute53HealthChecksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAssociatedRoute53HealthChecksQueryParams queryParams;
    public ListAssociatedRoute53HealthChecksRequest withQueryParams(ListAssociatedRoute53HealthChecksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssociatedRoute53HealthChecksHeaders headers;
    public ListAssociatedRoute53HealthChecksRequest withHeaders(ListAssociatedRoute53HealthChecksHeaders headers) {
        this.headers = headers;
        return this;
    }
}