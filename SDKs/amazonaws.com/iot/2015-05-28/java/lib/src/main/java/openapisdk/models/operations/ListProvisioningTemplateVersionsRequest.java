package openapisdk.models.operations;



public class ListProvisioningTemplateVersionsRequest {
    public ListProvisioningTemplateVersionsPathParams pathParams;
    public ListProvisioningTemplateVersionsRequest withPathParams(ListProvisioningTemplateVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListProvisioningTemplateVersionsQueryParams queryParams;
    public ListProvisioningTemplateVersionsRequest withQueryParams(ListProvisioningTemplateVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProvisioningTemplateVersionsHeaders headers;
    public ListProvisioningTemplateVersionsRequest withHeaders(ListProvisioningTemplateVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}