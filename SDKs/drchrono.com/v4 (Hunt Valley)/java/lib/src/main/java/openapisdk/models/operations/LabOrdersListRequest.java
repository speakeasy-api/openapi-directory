package openapisdk.models.operations;



public class LabOrdersListRequest {
    public LabOrdersListQueryParams queryParams;
    public LabOrdersListRequest withQueryParams(LabOrdersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabOrdersListSecurity security;
    public LabOrdersListRequest withSecurity(LabOrdersListSecurity security) {
        this.security = security;
        return this;
    }
}