package openapisdk.models.operations;



public class JobsOneRequest {
    public JobsOnePathParams pathParams;
    public JobsOneRequest withPathParams(JobsOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsOneQueryParams queryParams;
    public JobsOneRequest withQueryParams(JobsOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobsOneHeaders headers;
    public JobsOneRequest withHeaders(JobsOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public JobsOneSecurity security;
    public JobsOneRequest withSecurity(JobsOneSecurity security) {
        this.security = security;
        return this;
    }
}