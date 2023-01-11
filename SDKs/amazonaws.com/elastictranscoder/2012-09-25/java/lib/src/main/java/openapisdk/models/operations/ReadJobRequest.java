package openapisdk.models.operations;



public class ReadJobRequest {
    public ReadJobPathParams pathParams;
    public ReadJobRequest withPathParams(ReadJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReadJobHeaders headers;
    public ReadJobRequest withHeaders(ReadJobHeaders headers) {
        this.headers = headers;
        return this;
    }
}