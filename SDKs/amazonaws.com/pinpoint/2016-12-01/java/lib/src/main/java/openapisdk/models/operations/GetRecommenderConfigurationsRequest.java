package openapisdk.models.operations;



public class GetRecommenderConfigurationsRequest {
    public GetRecommenderConfigurationsQueryParams queryParams;
    public GetRecommenderConfigurationsRequest withQueryParams(GetRecommenderConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRecommenderConfigurationsHeaders headers;
    public GetRecommenderConfigurationsRequest withHeaders(GetRecommenderConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}