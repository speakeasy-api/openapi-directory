package openapisdk.models.operations;



public class ListProvisioningTemplatesRequest {
    public ListProvisioningTemplatesQueryParams queryParams;
    public ListProvisioningTemplatesRequest withQueryParams(ListProvisioningTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProvisioningTemplatesHeaders headers;
    public ListProvisioningTemplatesRequest withHeaders(ListProvisioningTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}