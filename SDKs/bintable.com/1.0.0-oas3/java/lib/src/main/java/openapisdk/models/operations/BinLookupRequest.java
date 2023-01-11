package openapisdk.models.operations;



public class BinLookupRequest {
    public BinLookupPathParams pathParams;
    public BinLookupRequest withPathParams(BinLookupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BinLookupQueryParams queryParams;
    public BinLookupRequest withQueryParams(BinLookupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}