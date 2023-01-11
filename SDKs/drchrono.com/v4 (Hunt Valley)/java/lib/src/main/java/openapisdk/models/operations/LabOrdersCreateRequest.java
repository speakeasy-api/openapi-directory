package openapisdk.models.operations;



public class LabOrdersCreateRequest {
    public LabOrdersCreateQueryParams queryParams;
    public LabOrdersCreateRequest withQueryParams(LabOrdersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabOrdersCreateSecurity security;
    public LabOrdersCreateRequest withSecurity(LabOrdersCreateSecurity security) {
        this.security = security;
        return this;
    }
}