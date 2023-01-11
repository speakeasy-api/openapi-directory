package openapisdk.models.operations;



public class DeleteContainerRecipeRequest {
    public DeleteContainerRecipeQueryParams queryParams;
    public DeleteContainerRecipeRequest withQueryParams(DeleteContainerRecipeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteContainerRecipeHeaders headers;
    public DeleteContainerRecipeRequest withHeaders(DeleteContainerRecipeHeaders headers) {
        this.headers = headers;
        return this;
    }
}