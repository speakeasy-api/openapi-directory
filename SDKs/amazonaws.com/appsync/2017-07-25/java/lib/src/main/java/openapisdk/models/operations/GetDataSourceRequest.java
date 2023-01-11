package openapisdk.models.operations;



public class GetDataSourceRequest {
    public GetDataSourcePathParams pathParams;
    public GetDataSourceRequest withPathParams(GetDataSourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDataSourceHeaders headers;
    public GetDataSourceRequest withHeaders(GetDataSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
}