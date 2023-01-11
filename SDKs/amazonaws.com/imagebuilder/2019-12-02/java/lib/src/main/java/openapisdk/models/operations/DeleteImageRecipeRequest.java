package openapisdk.models.operations;



public class DeleteImageRecipeRequest {
    public DeleteImageRecipeQueryParams queryParams;
    public DeleteImageRecipeRequest withQueryParams(DeleteImageRecipeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteImageRecipeHeaders headers;
    public DeleteImageRecipeRequest withHeaders(DeleteImageRecipeHeaders headers) {
        this.headers = headers;
        return this;
    }
}