package openapisdk.models.operations;



public class ListRepositoryAssociationsRequest {
    public ListRepositoryAssociationsQueryParams queryParams;
    public ListRepositoryAssociationsRequest withQueryParams(ListRepositoryAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRepositoryAssociationsHeaders headers;
    public ListRepositoryAssociationsRequest withHeaders(ListRepositoryAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}