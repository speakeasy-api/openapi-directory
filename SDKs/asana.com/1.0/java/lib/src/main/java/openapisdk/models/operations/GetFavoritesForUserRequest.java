package openapisdk.models.operations;



public class GetFavoritesForUserRequest {
    public GetFavoritesForUserPathParams pathParams;
    public GetFavoritesForUserRequest withPathParams(GetFavoritesForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFavoritesForUserQueryParams queryParams;
    public GetFavoritesForUserRequest withQueryParams(GetFavoritesForUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}