package openapisdk.models.operations;



public class GetStatisticsItemRequest {
    public GetStatisticsItemPathParams pathParams;
    public GetStatisticsItemRequest withPathParams(GetStatisticsItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStatisticsItemQueryParams queryParams;
    public GetStatisticsItemRequest withQueryParams(GetStatisticsItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}