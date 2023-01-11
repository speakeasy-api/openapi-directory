package openapisdk.models.operations;



public class GetListIdentitiesRequest {
    public GetListIdentitiesQueryParams queryParams;
    public GetListIdentitiesRequest withQueryParams(GetListIdentitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListIdentitiesHeaders headers;
    public GetListIdentitiesRequest withHeaders(GetListIdentitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
}