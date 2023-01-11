package openapisdk.models.operations;



public class GetPublicationsRequest {
    public GetPublicationsPathParams pathParams;
    public GetPublicationsRequest withPathParams(GetPublicationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPublicationsQueryParams queryParams;
    public GetPublicationsRequest withQueryParams(GetPublicationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}