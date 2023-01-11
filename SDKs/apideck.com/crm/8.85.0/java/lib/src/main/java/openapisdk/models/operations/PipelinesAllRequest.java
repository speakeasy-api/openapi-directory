package openapisdk.models.operations;



public class PipelinesAllRequest {
    public PipelinesAllQueryParams queryParams;
    public PipelinesAllRequest withQueryParams(PipelinesAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PipelinesAllHeaders headers;
    public PipelinesAllRequest withHeaders(PipelinesAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PipelinesAllSecurity security;
    public PipelinesAllRequest withSecurity(PipelinesAllSecurity security) {
        this.security = security;
        return this;
    }
}