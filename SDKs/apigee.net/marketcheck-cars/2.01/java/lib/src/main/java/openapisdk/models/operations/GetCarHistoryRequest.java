package openapisdk.models.operations;



public class GetCarHistoryRequest {
    public GetCarHistoryPathParams pathParams;
    public GetCarHistoryRequest withPathParams(GetCarHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCarHistoryQueryParams queryParams;
    public GetCarHistoryRequest withQueryParams(GetCarHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}