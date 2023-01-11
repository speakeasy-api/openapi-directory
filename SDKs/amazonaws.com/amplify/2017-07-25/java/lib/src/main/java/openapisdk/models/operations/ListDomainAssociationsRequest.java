package openapisdk.models.operations;



public class ListDomainAssociationsRequest {
    public ListDomainAssociationsPathParams pathParams;
    public ListDomainAssociationsRequest withPathParams(ListDomainAssociationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDomainAssociationsQueryParams queryParams;
    public ListDomainAssociationsRequest withQueryParams(ListDomainAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDomainAssociationsHeaders headers;
    public ListDomainAssociationsRequest withHeaders(ListDomainAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}