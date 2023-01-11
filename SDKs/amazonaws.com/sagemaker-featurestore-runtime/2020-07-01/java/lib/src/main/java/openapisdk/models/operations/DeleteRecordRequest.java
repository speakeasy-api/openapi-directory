package openapisdk.models.operations;



public class DeleteRecordRequest {
    public DeleteRecordPathParams pathParams;
    public DeleteRecordRequest withPathParams(DeleteRecordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRecordQueryParams queryParams;
    public DeleteRecordRequest withQueryParams(DeleteRecordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteRecordHeaders headers;
    public DeleteRecordRequest withHeaders(DeleteRecordHeaders headers) {
        this.headers = headers;
        return this;
    }
}