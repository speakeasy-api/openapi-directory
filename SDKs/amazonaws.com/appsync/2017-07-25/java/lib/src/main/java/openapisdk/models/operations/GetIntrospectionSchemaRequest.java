package openapisdk.models.operations;



public class GetIntrospectionSchemaRequest {
    public GetIntrospectionSchemaPathParams pathParams;
    public GetIntrospectionSchemaRequest withPathParams(GetIntrospectionSchemaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetIntrospectionSchemaQueryParams queryParams;
    public GetIntrospectionSchemaRequest withQueryParams(GetIntrospectionSchemaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetIntrospectionSchemaHeaders headers;
    public GetIntrospectionSchemaRequest withHeaders(GetIntrospectionSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
}