package openapisdk.models.operations;



public class LabOrdersSummaryListRequest {
    public LabOrdersSummaryListQueryParams queryParams;
    public LabOrdersSummaryListRequest withQueryParams(LabOrdersSummaryListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabOrdersSummaryListSecurity security;
    public LabOrdersSummaryListRequest withSecurity(LabOrdersSummaryListSecurity security) {
        this.security = security;
        return this;
    }
}