package openapisdk.models.operations;



public class DrivesAllRequest {
    public DrivesAllQueryParams queryParams;
    public DrivesAllRequest withQueryParams(DrivesAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DrivesAllHeaders headers;
    public DrivesAllRequest withHeaders(DrivesAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DrivesAllSecurity security;
    public DrivesAllRequest withSecurity(DrivesAllSecurity security) {
        this.security = security;
        return this;
    }
}