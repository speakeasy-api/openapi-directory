package openapisdk.models.operations;



public class LabOrdersSummaryReadRequest {
    public LabOrdersSummaryReadPathParams pathParams;
    public LabOrdersSummaryReadRequest withPathParams(LabOrdersSummaryReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabOrdersSummaryReadQueryParams queryParams;
    public LabOrdersSummaryReadRequest withQueryParams(LabOrdersSummaryReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabOrdersSummaryReadSecurity security;
    public LabOrdersSummaryReadRequest withSecurity(LabOrdersSummaryReadSecurity security) {
        this.security = security;
        return this;
    }
}