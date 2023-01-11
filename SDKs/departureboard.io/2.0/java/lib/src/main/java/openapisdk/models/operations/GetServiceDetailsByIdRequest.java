package openapisdk.models.operations;



public class GetServiceDetailsByIdRequest {
    public GetServiceDetailsByIdPathParams pathParams;
    public GetServiceDetailsByIdRequest withPathParams(GetServiceDetailsByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetServiceDetailsByIdQueryParams queryParams;
    public GetServiceDetailsByIdRequest withQueryParams(GetServiceDetailsByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}