package openapisdk.models.operations;



public class ListExecutionsRequest {
    public ListExecutionsQueryParams queryParams;
    public ListExecutionsRequest withQueryParams(ListExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListExecutionsHeaders headers;
    public ListExecutionsRequest withHeaders(ListExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}