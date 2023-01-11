package openapisdk.models.operations;



public class GetOrganizationRequest {
    public GetOrganizationPathParams pathParams;
    public GetOrganizationRequest withPathParams(GetOrganizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrganizationQueryParams queryParams;
    public GetOrganizationRequest withQueryParams(GetOrganizationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}