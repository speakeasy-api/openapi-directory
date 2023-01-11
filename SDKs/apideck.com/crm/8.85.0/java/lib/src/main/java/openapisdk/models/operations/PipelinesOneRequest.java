package openapisdk.models.operations;



public class PipelinesOneRequest {
    public PipelinesOnePathParams pathParams;
    public PipelinesOneRequest withPathParams(PipelinesOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PipelinesOneQueryParams queryParams;
    public PipelinesOneRequest withQueryParams(PipelinesOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PipelinesOneHeaders headers;
    public PipelinesOneRequest withHeaders(PipelinesOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PipelinesOneSecurity security;
    public PipelinesOneRequest withSecurity(PipelinesOneSecurity security) {
        this.security = security;
        return this;
    }
}