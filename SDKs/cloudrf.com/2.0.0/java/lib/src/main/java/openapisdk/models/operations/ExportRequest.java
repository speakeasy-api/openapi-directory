package openapisdk.models.operations;



public class ExportRequest {
    public ExportQueryParams queryParams;
    public ExportRequest withQueryParams(ExportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportSecurity security;
    public ExportRequest withSecurity(ExportSecurity security) {
        this.security = security;
        return this;
    }
}