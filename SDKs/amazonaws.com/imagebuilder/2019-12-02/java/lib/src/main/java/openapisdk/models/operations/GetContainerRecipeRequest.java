package openapisdk.models.operations;



public class GetContainerRecipeRequest {
    public GetContainerRecipeQueryParams queryParams;
    public GetContainerRecipeRequest withQueryParams(GetContainerRecipeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetContainerRecipeHeaders headers;
    public GetContainerRecipeRequest withHeaders(GetContainerRecipeHeaders headers) {
        this.headers = headers;
        return this;
    }
}