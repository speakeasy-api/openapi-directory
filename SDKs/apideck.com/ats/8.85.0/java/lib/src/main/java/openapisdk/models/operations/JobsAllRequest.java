package openapisdk.models.operations;



public class JobsAllRequest {
    public JobsAllQueryParams queryParams;
    public JobsAllRequest withQueryParams(JobsAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobsAllHeaders headers;
    public JobsAllRequest withHeaders(JobsAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public JobsAllSecurity security;
    public JobsAllRequest withSecurity(JobsAllSecurity security) {
        this.security = security;
        return this;
    }
}