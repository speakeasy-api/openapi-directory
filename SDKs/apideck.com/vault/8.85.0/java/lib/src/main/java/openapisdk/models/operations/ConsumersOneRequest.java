package openapisdk.models.operations;



public class ConsumersOneRequest {
    public ConsumersOnePathParams pathParams;
    public ConsumersOneRequest withPathParams(ConsumersOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConsumersOneHeaders headers;
    public ConsumersOneRequest withHeaders(ConsumersOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ConsumersOneSecurity security;
    public ConsumersOneRequest withSecurity(ConsumersOneSecurity security) {
        this.security = security;
        return this;
    }
}