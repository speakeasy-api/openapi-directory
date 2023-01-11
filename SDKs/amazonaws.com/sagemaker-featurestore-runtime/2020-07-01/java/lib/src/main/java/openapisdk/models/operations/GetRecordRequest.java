package openapisdk.models.operations;



public class GetRecordRequest {
    public GetRecordPathParams pathParams;
    public GetRecordRequest withPathParams(GetRecordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRecordQueryParams queryParams;
    public GetRecordRequest withQueryParams(GetRecordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRecordHeaders headers;
    public GetRecordRequest withHeaders(GetRecordHeaders headers) {
        this.headers = headers;
        return this;
    }
}