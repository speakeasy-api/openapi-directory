package openapisdk.models.operations;



public class GetOrganizationExportRequest {
    public GetOrganizationExportPathParams pathParams;
    public GetOrganizationExportRequest withPathParams(GetOrganizationExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrganizationExportQueryParams queryParams;
    public GetOrganizationExportRequest withQueryParams(GetOrganizationExportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}